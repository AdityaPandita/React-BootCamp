let numberValues = 
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

/**
 * 
 * @param {use} : Enter Whole Numbers, upto a Billion, converts into String. 
 */
function convertIntoWords( value ) {

    return concator( analyzer( value ) );
}

function concator( values ) {

    if( values.length === 4 ) {

        return inWords( values.shift() ) + ' Billion, '+ concator( values );
    }
    if( values.length === 3 ) {

        return inWords( values.shift() ) + ' Million, '+ concator( values );
    }
    if( values.length === 2 ) {

        return inWords( values.shift() ) + ' Thousand, '+ concator( values );
    }
    if( values.length === 1 ) {

        return inWords( values.shift() );
    }

    return '';
}

function inWords( value ) {


    switch( value.toString().length ) {

      case 1:
        return numberValues.get( value );
        break;

      case 2:
        return size2( value );
        break;

      case 3:
        return size3( value );
        break;

    }
}

function analyzer( value ) {

    let separations = segregator( value.toString().length );
    value = value.toString();

    let pieces = [];

    let ptr = 0;
    for( let i = 0; i < separations.length; i++ ) {

        let currValue = '';
        for( let j = 0; j < separations[ i ]; j++ ){

            currValue += value[ j ];
        }

        ptr += separations[ i ];
        pieces.push( parseInt( currValue ) );

        value = value.slice( separations[ i ] );
    }

    return pieces;
}

function segregator( length ) {

    let groups = [];
    let portions = length / 3;

    for( let i = 0; i < Math.floor( portions ); i++ ) {

        groups.push( 3 );
    }

    if( Math.round( (portions - Math.floor( portions ))* 3 ) ) {

        groups.unshift( Math.round( (portions - Math.floor( portions ))* 3 ) );
    }

    return groups;
}

function size3( value ) {
    debugger;
    if( value % 100 === 0 ) {
        return numberValues.get( Math.floor( value / 100 ) )+ ' Hundred ';
    }
    else {

        return numberValues.get( Math.floor( value / 100 ) ) 
            +' Hundred '+ 
            size2( ( value  ) - Math.floor( value / 100 ) *100 );
    }
}

function size2( value ) {

    if( value <= 20 ) {
        return numberValues.get( value );
    }
    else if( value % 10 === 0 ) {
        return numberValues.get( value );
    }
    else {
        return numberValues.get( Math.floor( value / 10 )*10 ) +' '+ numberValues.get( value % 10 );
    }
}






