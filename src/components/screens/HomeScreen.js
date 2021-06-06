import React from 'react';
import axios from 'axios';

import PokemonMoveset from './PokemonMovesetComponent'

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon_data: [],
            loading: false,
            load_moveset: false,
            pokemon_name: null,
            found_Pokemon: false,
            pokemon_image: null,
        }
    }

    changeName = (event) => {
        this.setState({
            pokemon_name: event.target.value,
            found_Pokemon: true,
            load_moveset: false,
            pokemon_image: "https://img.pokemondb.net/sprites/home/normal/" + event.target.value.toLowerCase() + ".png"
        })
    }

    imageError = (e) => {
        this.setState({
            found_Pokemon: false,
        })
    }

    getPokemonData() {
        this.setState({
            loading: true,
            load_moveset: true
        })
        axios.get("http://localhost:5000/" + this.state.pokemon_name) //pokemon name is subject to change
            .then(response => {
                console.log("Getting Data", response.data);
                this.setState({
                    pokemon_data: response.data,
                    loading: false
                })
            })
    }

    render() {
        return (
            <div>
                <h1>Enter a Pokemon</h1>
                <input
                    type='text'
                    onChange={this.changeName}
                />
                <div>
                    <img onError={this.imageError} src={this.state.pokemon_image} alt="" />
                    {this.state.found_Pokemon
                        ? <div>
                            <button onClick={() => this.getPokemonData()}>Get Competitive Set</button>
                            {this.state.load_moveset
                                ? <div>
                                    <h1>Moveset</h1>
                                    {this.state.loading
                                        ? <div>
                                            <h2>Still loading</h2>
                                        </div>
                                        : <div>
                                            <PokemonMoveset data = {this.state.pokemon_data}/>
                                        </div>
                                    }
                                </div>
                                : <div></div>
                            }
                        </div>
                        : <div>
                            <h3>Pokemon Not found</h3>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default HomeScreen