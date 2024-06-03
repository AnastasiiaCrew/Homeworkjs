// function drawTriangle(height, symbol){
//     let tmp = symbol;
//     for (let i = 0; i < height; i++) {
//         console.log(tmp);
//         tmp += symbol;
//     }
// }

// drawTriangle(5,'*')

function drawTriangle(height, symbol) {
       
    for (let i = 0; i < height; i++) {
        let tmp ='';
        for (let j = 0; j <= i; j++) {
                tmp += symbol;
            }
            console.log(tmp);
        }
}
drawTriangle(5,'-')