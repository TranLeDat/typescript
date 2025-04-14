//array
let teacher1: (string | number | boolean)[] = ['onizuka', 24]
teacher1.push(40);

//tuple - dataType/size/order
let teacher2: [string, number] = ['onizuka', 24]
teacher2.push(40);

let teacher3 : [boolean, string, number?];

teacher3 = [true, 'onibaku', 24]


console.log(`check teacher ${teacher1}`);
console.log(`check teacher ${teacher2}`);
console.log(`check teacher ${teacher3}`);