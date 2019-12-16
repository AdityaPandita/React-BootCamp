import React, { Component } from 'react';
import PokeCard from './Pokecard';



class Pokedex extends Component {


    render(){

        var sum = 0;
        return(
            <div className="row bg-light m-5">
                {
                this.props.content.map(
                    pokemon => (
                    <div className=" col-md-3">
                        <PokeCard 
                            name={pokemon.name}
                            id={pokemon.id}
                            type={pokemon.type}
                            base_experience={pokemon.base_experience}/>
                            {sum += pokemon.base_experience}
                    </div>
                     )
                    )
                }
               
            <div className="text-danger">Sum : {sum}</div>
            </div>
        )
    }

    
}

export default Pokedex;