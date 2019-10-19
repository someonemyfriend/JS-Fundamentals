function solve(start, end) {
    let output = "";
    let sum = 0;

    for(let num = start; num <= end; num++ ) {
        output += `${num} `;
        sum += num;
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}

solve(5, 10);