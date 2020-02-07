import React, { Component } from 'react';

class ScoreKeeper extends Component {

    constructor( props ) {
        super( props );
        this.state = { score: 0 };
        this.singleKill = this.singleKill.bind( this );
        this.tripleKill = this.tripleKill.bind( this );
        // this.convertIntoWords = this.convertIntoWords.bind( this );

        this.numberValues = 
            new Map(
                [
                    [ 0, 'Zero' ],
                    [ 1, 'One' ],
                    [ 2, 'Two' ],
                    [ 3, 'Three' ],
                    [ 4, 'Four' ],
                    [ 5, 'Five' ],
                    [ 6, 'Six' ],
                    [ 7, 'Seven' ],
                    [ 8, 'Eight' ],
                    [ 9, 'Nine' ],
                    [ 10, 'Ten' ],
                    [ 11, 'Eleven' ],
                    [ 12, 'Twelve' ],
                    [ 13, 'Thirteen' ],
                    [ 14, 'Fourteen' ],
                    [ 15, 'Fifteen' ],
                    [ 16, 'Sixteen' ],
                    [ 17, 'Seventeen' ],
                    [ 18, 'Eighteen' ],
                    [ 19, 'Nineteen' ],
                    [ 20, 'Twenty' ],
                    [ 30, 'Thirty' ],
                    [ 40, 'Forty' ],
                    [ 50, 'Fifty' ],
                    [ 60, 'Sixty' ],
                    [ 70, 'Seventy' ],
                    [ 80, 'Eighty' ],
                    [ 90, 'Ninety' ],
                    [ 100, 'Hundred' ],
                    [ 1000, 'Thousand' ],
                    [ 1000000, 'Million' ],
                    [ 1000000000, 'Billion' ]
                ]
            );

        this.setState( { a: this.numberValues} );

        
    }

    singleKill() {
        debugger;
        //this.setState({ score: ( this.state.score + 1 ) });
        //this.setState({ score: 1 });
        this.setState( 
            st =>{ 
                return {score: st.score + 2 }; 
            }
        );

        this.setState( // otherwise even if we include the direct setter down below it will directly take the last line
            st =>{ 
                return {score: st.score + 3 }; 
            }
        );
        //this.setState({ score: alert( '3' ) });

        //this.setState({ score: (function( ) { alert(4); return 4; })() });
        //this.setState({ score: ( this.state.score + 1 ) });// Only this line get's executed here.

        /** Never directly modify the state. */
    }

    increementScore( currState ) {

        return { score: currState.score + 1 };
    }

    tripleKill() {

        this.setState( this.increementScore );
        this.setState( this.increementScore );
    }


    render() {

        return (
            <div>
                <h1> Score is: { this.state.score }</h1>
                <button onClick={ this.convertIntoWords } > SingleKill!</button>
            </div>
        );
    }
}

export default ScoreKeeper;