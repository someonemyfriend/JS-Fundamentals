function arr(num) {
    if( num <= 2 ){
        console.log("baby");
    }
       
    else if( num <= 13 ) {
        console.log("child");
    }

    else if( num <= 19 ) {
        console.log("teenager");
    }

    else if( num <= 65 ) {
        console.log("adult");
    }

    else if( num >= 66 ) {
        console.log("elder");
    }
}

arr(14);