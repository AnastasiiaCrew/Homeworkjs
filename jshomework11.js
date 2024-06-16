function myBlend(arr) {
    arr.forEach((_, i) => {
        const j = Math.floor(Math.random() * arr.length);
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Міняємо місцями елементи
    });
    return arr; // Повертаємо перемішаний масив
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Before shuffle:", arr);
myBlend(arr);
console.log("After shuffle:", arr);