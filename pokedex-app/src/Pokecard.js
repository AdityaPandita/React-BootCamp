import React, { Component } from 'react';
import logo from './logo.svg';

class PokeCard extends Component {
    render(){
        return (
            <div className="badge bg-dark p-1 m-5">
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