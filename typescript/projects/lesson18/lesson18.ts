function addNumberOrString (a: string | number, b: string | number){
    if(typeof a ==='number' && typeof b === 'number'){
        return a + b;
    }
    if(typeof a ==='string' && typeof b === 'string'){
        return a.concat(b);
    }
    throw new Error('parameters must be number or string')

}


console.log(addNumberOrString(5, 9));
console.log(addNumberOrString("onizuka ", 'eikichi'));
console.log(addNumberOrString("onizuka ", 40));
// console.log(addNumberOrString("onizuka ", true));
