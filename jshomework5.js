function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}

// Приклади використання:
console.log(pow(2, 3));  // Поверне 8
console.log(pow(5, 4));  // Поверне 625
console.log(pow(3, 0));  // Поверне 1
