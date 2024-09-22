const charpyramid2 = (n) => {
    let space;
    for (let i = 0; i <= n; i++) {
        space = "";
        for (let k = n - i; k >= 1; k--) {
            space = space + ' ';
        }
        //% Printing characters
        for (let j = 0; j < i; j++) {
            space += String.fromCharCode(j + 65) + ' ';
        }
        console.log(space);
    }

}