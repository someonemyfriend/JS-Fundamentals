
    // let english = 'English';
    // let spanish = "Spanish";

//    if(country === 'USA') {
//     console.log(english);
//    } else if (country === 'Spain') {
//     console.log(spanish);
//    } else if (country === 'Mexico') {
//     console.log(spanish);
//    } else if (country === 'Argentina') {
//     console.log(spanish);
//    } else if (country === 'Egland and USA') {
//     console.log(english);
//    } else {
//     console.log("unknown");
//    }
    
function solve(country) {
   
   switch(country) {
    case 'England':
    case 'USA':
        console.log('English');
      break;
    case 'Spain':
    case 'Argentina':
    case 'Mexico':
        console.log('Spanish');
      break;
    default:
        console.log('unknown');
        break;
  }


}

solve('Argentina');