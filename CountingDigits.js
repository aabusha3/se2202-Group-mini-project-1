let _0Lines = [" _ ", "| |", "|_|"];
let _1Lines = ["   ", "|  ", "|  "];
let _2Lines = [" _ ", " _|", "|_ "];
let _3Lines = [" _ ", " _|", " _|"];
let _4Lines = ["   ", "|_|", "  |"];
let _5Lines = [" _ ", "|_ ", " _|"];
let _6Lines = [" _ ", "|_ ", "|_|"];
let _7Lines = [" _ ", "  |", "  |"];
let _8Lines = [" _ ", "|_|", "|_|"];
let _9Lines = [" _ ", "|_|", "  |"];


let onesDigit = [_0Lines, _1Lines, _2Lines, _3Lines, _4Lines, _5Lines, _6Lines, _7Lines, _8Lines, _9Lines]

let printDoubleDigit = function(tensDigit) {
    let innerPrintDoubleDigit = function() {
        for (let j = 0; j < onesDigit.length; j++) {
            let twoDigit = "";
            let secondDigit = onesDigit[j]
            for (let i = 0; i < 3; i++) {
                twoDigit += tensDigit[i] + secondDigit[i] + "\n";
                // twoDigit += "\n";
            };
            console.log(twoDigit);
        };
    };
    return innerPrintDoubleDigit;
};


let printSingles = printDoubleDigit(_0Lines);
let printTeens = printDoubleDigit(_1Lines);
let printTwenties = printDoubleDigit(_2Lines);
let printThirties = printDoubleDigit(_3Lines);
let printForties = printDoubleDigit(_4Lines);
let printFifties = printDoubleDigit(_5Lines);
let printSixties = printDoubleDigit(_6Lines);
let printSeventies = printDoubleDigit(_7Lines);
let printEighties = printDoubleDigit(_8Lines);
let printNineties = printDoubleDigit(_9Lines);



printSingles();
printTeens();
printTwenties();
printThirties();
printForties();
printFifties();
printSixties();
printSeventies();
printEighties();
printNineties();