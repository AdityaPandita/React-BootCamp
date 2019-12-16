import React, { Component } from 'react';
import Pokedex from './Pokedex';
import PokeCard from './Pokecard';


class Pokegame extends Component {

    render(){
        return(
            <div>
                <Pokedex content={this.props.content1} />
                <Pokedex content={this.props.content2} />
            </div>
        )
            
        
    };
}

export default Pokegame;