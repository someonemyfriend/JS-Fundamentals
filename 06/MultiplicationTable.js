function solve(num) {
 
    num = Number(num);

    if (num <= 100) {

        for(let i = 1; i <= 10; i++) {
            var product = num * i;
            let output = `${num} X ${i} = ${product}`;
            console.log(output);
        } 
    } 
    
}

solve(88);