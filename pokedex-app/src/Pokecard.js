import React, { Component } from 'react';
import logo from './logo.svg';
import './Pokecard.css';

class PokeCard extends Component {

    constructor( props ){// except the constructor we have access to props everywhere.So, do pass pp.
        super( props ); // for extending the constructor of the component class in React, otherwise it won't fetch.
        this.state = {
            skore : 999
        };
    }
    render(){
        return (
            <div className="Poke-card badge bg-dark p-1 m-5">
                <div className="text-primary">{this.props.name}</div>
                <div className="p-1">
                    <div>{this.props.id}</div>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div>Type : {this.props.type}</div>
                <div>Exp : {this.props.base_experience}</div>

            </div>
        )
    }


}

export default PokeCard;