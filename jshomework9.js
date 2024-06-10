let city = {
    name:"Odesa",
    population : 993120,
    square : 162.42,
    getInfo(){
        for (const key in this) {
            if (key !== 'getInfo') {console.log(key,':',this[key]);}      
         }
    }
}

 city.getInfo();
 city.country = 'Ukraine';
 city.getInfo();