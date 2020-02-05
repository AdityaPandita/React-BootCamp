import React,{ Component } from 'react';
import Dice from './Dice';

class RollDice extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            die1 : 6,
            die2 : 6
        };
        this.randomDieCount = this.randomDieCount.bind( this );
    }

    randomDieCount() {

        // debugger;
        var diceCss = document.getElementsByClassName( 'rolling' );
        // alert( JSON.stringify(diceCss) );

        for( let i = 0; i < diceCss.length; i++ ) {
            diceCss[ i ].classList.remove( 'rolling' );
        }
        //diceCss.forEach( function( element ) {  } );
        // this.setState({ rolling : false });

        var d1 = Math.floor( Math.random()*100 )%6 + 1;
        var d2 = Math.floor( Math.random()*100 )%6 + 1;

        this.setState({ die1 : d1, die2 : d2});
        this.setState({ rolling : true });
    }

    render() {
        return(
            <div>
                <div className="d-flex justify-content-center p-2">
                    <Dice count={this.state.die1} rolling={this.state.rolling} />
                    <Dice count={this.state.die2} rolling={this.state.rolling} />
                </div>
                <div>
                    <button class="purple" onClick={this.randomDieCount} > Roll </button>
                </div>
            </div>
        );
    }
}

export default RollDice;
