
function choice( arr ) {

    var randomItems = [...arr];
    return randomItems[0];
}


function remove( arr, item ) {

    for( let i = 0; i < arr.length; i++) {
        if( arr[i] == item ) {
            arr.splice( i, 1 );
            return arr;
        }

    }

    return undefined;
}

export { choice, remove };