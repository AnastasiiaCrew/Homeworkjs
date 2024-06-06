function isNaN2(value){
    return value !== value;
}
    console.log(isNaN("dssa" / 5));

//true//
console.log(isNaN2("NaN"));
console.log(isNaN2(undefined));
console.log(isNaN2({}));
console.log(isNaN2("blabla"));
//false//
console.log(isNaN2(true));
console.log(isNaN2(null));
console.log(isNaN2("37"));
console.log(isNaN2("37.37"));
console.log(isNaN2(""));
console.log(isNaN2(" "));
