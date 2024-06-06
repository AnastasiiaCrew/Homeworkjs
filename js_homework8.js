function checkProbabilityTheory(count) {
    // Функція для генерації випадкового числа в діапазоні [min, max]
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Лічильники для парних і непарних чисел
    let evenCount = 0;
    let oddCount = 0;

    // Генеруємо випадкові числа та рахуємо парні й непарні
    for (let i = 0; i < count; i++) {
        let randomNumber = getRandomInt(100, 1000);
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    // Обчислюємо відсоткове співвідношення
    let evenPercentage = (evenCount / count) * 100;
    let oddPercentage = (oddCount / count) * 100;

    // Виводимо результати
    console.log(`Парні числа: ${evenCount} (${evenPercentage.toFixed(2)}%)`);
    console.log(`Непарні числа: ${oddCount} (${oddPercentage.toFixed(2)}%)`);
    
    // Повертаємо результати у вигляді об'єкта
    return {
        evenCount,
        oddCount,
        evenPercentage,
        oddPercentage
    };
}

// Приклад використання
let result = checkProbabilityTheory(1000);
console.log(result);