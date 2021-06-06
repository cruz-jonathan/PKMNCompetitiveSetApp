import React from 'react';

class PokemonMoveset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moveset: this.props.data[2],
            message: this.props.data[1],
            found_set: this.props.data[0]
        }
    }
    render() {
        return (
            <div>
                {this.state.found_set
                    ?
                    <div>
                        <h3>{this.state.message}</h3>
                        <h3>Move 1: {this.state.moveset.move_one}</h3>
                        <h3>Move 2: {this.state.moveset.move_two}</h3>
                        <h3>Move 3: {this.state.moveset.move_three}</h3>
                        <h3>Move 4: {this.state.moveset.move_four}</h3>
                        <h3>Ability: {this.state.moveset.ability}</h3>
                        <h3>Nature: {this.state.moveset.nature}</h3>
                        <h3>Item: {this.state.moveset.item}</h3>
                        <h3>EVS: {this.state.moveset.evs}</h3>
                    </div>
                    : 
                    <div>
                        <h3>{this.state.message}</h3>
                    </div>
                }
            </div>
        )
    }
}

export default PokemonMoveset;