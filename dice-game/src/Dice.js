import React,{ Component } from 'react';

class Dice extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            // count : this.convertToString( props.count )
        };
        this.convertToString = this.convertToString.bind( this );
    }

    convertToString( num ) {
        debugger;
        let store = { 1 : 'one',2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five', 6 : 'six'};

        var x = 'fas fa-dice-'+ store[ num ]+' fa-10x';

        return x;
    }

    render() {
        var cls = this.convertToString( this.props.count );
        console.log( this.props.count );
        return(
            <div>{this.props.count}
                <i className={this.convertToString( this.props.count )}></i>
            </div>
        );
    }
}

export default Dice;