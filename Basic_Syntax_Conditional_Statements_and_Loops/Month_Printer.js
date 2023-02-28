function solve(monthByNum){
    if (monthByNum > 12 || monthByNum < 1) {
        console.log("Error!");
    } else if (monthByNum == 1) {
        console.log("January");
    } else if (monthByNum == 2) {
        console.log("February");
    } else if (monthByNum == 3) {
        console.log("March");
    } else if (monthByNum == 4) {
        console.log("April");
    } else if (monthByNum == 5) {
        console.log("May");
    } else if (monthByNum == 6) {
        console.log("June");
    } else if (monthByNum == 7) {
        console.log("July");
    } else if (monthByNum == 8) {
        console.log("August");
    } else if (monthByNum == 9) {
        console.log("September");
    } else if (monthByNum == 10) {
        console.log("October");
    } else if (monthByNum == 11) {
        console.log("November ");
    } else if (monthByNum == 12) {
        console.log("December");
    }
}

solve(13);