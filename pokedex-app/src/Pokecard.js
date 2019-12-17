import React, { Component } from 'react';
import logo from './logo.svg';
import './Pokecard.css';

class PokeCard extends Component {

    constructor( props ){// except the constructor we have access to props everywhere.So, do pass pp.
        super( props ); // for extending the constructor of the component class in React, otherwise it won't fetch.
        this.state = {
            skore : 999,
            clicks : 0,
            clicked : false
        };
        this.makeTimer();
        this.updateClicker = this.updateClicker.bind( this );
    }

    makeTimer() {
        setInterval(
            () => 
                {
                    let rand = Math.floor( Math.random() * 10 );
                    this.setState( { skore : rand });
                }, 
                1000
            );
    }

    updateClicker() {

        this.setState({ clicks : this.state.clicks + 1, clicked : true });
    }

    render(){
        return (
            <div className="Poke-card badge bg-dark p-1 m-5" onClick={this.updateClicker}>
                <div className="text-primary">{this.props.name}:{this.state.skore}</div>
                <div className="p-1">
                    <div>{this.props.id}</div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/Mangekyou_Sharingan_Kakashi.svg" className="App-logo" alt="logo" />
                </div>
                <div>Type : {this.props.type}</div>
                <div>Exp : {this.props.base_experience}</div>
                <div> Clicks : {this.state.clicks}</div>

            </div>
        )
    }


}

export default PokeCard;