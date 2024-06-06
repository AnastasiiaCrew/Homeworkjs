function pad(string, symbol, count, isBeginning) {
    if (count > string.lenght) 
        return (isBeginning) ? symbol.repeat(count - string.length).concat(string) : string.concat(symbol.repeat(count - string.length));
    else {
        return string;
    }
}

// Приклади використання
console.log(pad('qwerty', '+', 10, true));   // "++++qwerty"
console.log(pad('qwerty', '+', 10, false));  // "qwerty++++"
console.log(pad('hello', '-', 8, true));     // "---hello"
