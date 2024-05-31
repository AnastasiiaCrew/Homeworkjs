// var result = 'number' + 3 + 3; //компентелює дані, додає текст та number
// console.log(result); 

// var result = null + 3; // js робить null as number 0 і 0 плюс 3 дорівнює три.
// console.log(result);

// var result = 5 && "qwerty" // перше значення яке знайде в порівняннях і виводить
// console.log(result)

// var result = +'40' + +'2' + "hillel" //js перетворює стрінг на число, додає числа та компентелює текст
// console.log(result);

// var result = '10' - 5 === 6 //строга рівність , значення різні і мають різний тип 
// console.log(result);

// var result = true + false // 1 +0 = 1
// console.log(result);

// var result = '4px' - 3 // js буде пробувати перетворити текст на число , але у нього не вийде і дасть Not a Number  
// console.log(result);

// var result = '4' - 3 // js перетворює стрінг на число і робить віднімання
// console.log(result);

// var result = '6' + 3 ** 0; //три в нульовому ступені рівно 1 , js перетворює стірнг 6 на число і робить компеляцію
// console.log(result);

// var result = 12 / '6' // js робить звичайну дію ділення 12 на 6, при чому доводить стрінг до числа
// console.log(result);

// var result = '10' + (5 === 6); // js спочатку робить в дужках оператор строгої рівності і отримує false, і додає перетворений стрінг у намбер до результату у дужках 
// console.log(result);

// var result = null == '' // null та пуста строка завжди приводяться до false
// console.log(result);

// var result = 3 ** (9 / 3); // js робить ділення 9 на 3, потім возводить у ступінь 3
// console.log(result);

// var result = !!'false' == !!'true' // оператор порівнює два значення на рівність за значенням. 
// console.log(result);

// var result = 0 || '0' && 1
// console.log(result);

// var result = (+null == false) < 1; //js використовує оператор рівності , але null завжди приводиться до false, тоді false  дорівнює false дасть true , a 1 не менше одиниці.
// console.log(result);

// var result = false && true || true // спочатку повертає false , тому що одидва не true , а потім АБО дає true тому що хоча б один true.
// console.log(result);

// var result = false && (false || true); // спочатку порівнює логічний оператор  в дужках і видає true , потім && повертає false тому що один з них не true
// console.log(result);

// var result = (+null == false) < 1 ** 5; //js використовує оператор рівності , але null завжди приводиться до false, тоді false  дорівнює false дасть true , a 1 не менше одиниці.
// console.log(result);