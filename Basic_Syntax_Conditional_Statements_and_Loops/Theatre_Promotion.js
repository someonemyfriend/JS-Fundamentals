function solve(day, age) {
    if( -1000 > age){
        console.log("Error!");
    } else if(age > 1000){
        console.log("Error!");
    }
    switch (day) {
        case 'Weekday':
            if(64 < age && age <= 122) {
                console.log('12$');
                
            }
            else if(age <= 18 && 0 <= age) {
                console.log('12$');
                
            }
            else if(18 < age && age <= 64) {
                console.log('18$');
                
            }
            // else if( age > 1000 ) {
            //     console.log('Error!');
            // }
          break;
        case 'Weekend':
            if(64 < age && age <= 122) {
                console.log('15$');
                
            }
            else if(age <= 18 && 0 <= age) {
                console.log('15$');
                
            }
            else if(18 < age && age <= 64) {
                console.log('20$');
                
            }
            // else if( age <= 0 ) {
            //     console.log('Error!');
            // }
        break;
        case 'Holiday':
            if(64 < age && age <= 122) {
                console.log('10$');
                
            }
            else if(age <= 18 && 0 <= age) {
                console.log('5$');
                
            }
            else if(18 < age && age <= 64) {
                console.log('12$');
                
            }
            // else if( age <= 0 ) {
            //     console.log('Error!');
            // }
        break;
      }
}
solve('Holiday', 65);