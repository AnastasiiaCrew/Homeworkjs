// let array = arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function myBlend(arr) {
//     let arrNumber;
//     for (let i = 0; 1 <arr.length; i++) {
//         let randomNumber = Math.round(Math.random() * (array.length -1 ));
//     arrNumber = arr[randomNumber];
//     arr[randomNumber] = arr [i];
//     arr[i] = arrNumber;
// }
// }

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