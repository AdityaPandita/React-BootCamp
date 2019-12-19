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

        var d1 = Math.floor( Math.random()*100 )%6 + 1;
        var d2 = Math.floor( Math.random()*100 )%6 + 1;

        this.setState({ die1 : d1, die2 : d2});
    }

    render() {
        return(
            <div>
                <div className="flex d-inline p-2">
                    <Dice count={this.state.die1}/>
                    <Dice count={this.state.die2}/>
                </div>
                <div>
                    <button onClick={this.randomDieCount}> Roll </button>
                </div>
            </div>
        );
    }
}

export default RollDice;