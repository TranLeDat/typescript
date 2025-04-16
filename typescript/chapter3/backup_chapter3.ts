//lesson 20
let age: number = 25;

if(age > 18){
    console.log('You can watch laptop');
    
}else{
    console.log('Oops >> you can watch anime');
    
}

//lesson 21
const age1: number = 24;

switch(age){
    case 24:
    case 25:
        console.log('di lam');
        
        break;
    case 18:
        console.log('di hoc');
        break;
    default:
        console.log('run default');
        
}

//lesson 22

for(let i =0; i < 10; i++){
    console.log(">> i: ", i);
    
}



//lesson23

let count:number =1;

while(count < 5){
    console.log(count);
    if(count % 2 === 0) break;
    count++;
    
}

//lesson 24
let count2: number = 6;

do{
    console.log(count);
    if(count2 % 2 === 0) break;
    count2++;
}while(count2 < 5)


    
//lesson 25
let products = [
    {name: 'phone' , price : 600},
    {name: 'tablet' , price : 900},
    {name: 'laptop' , price : 1200},
]

for(let i = 0; i< products.length; i++){
    if(products[i].price === 900){
        break;
    }
    console.log(products[i]);
}


//lesson26
for(let index = 0; index < 9; index++){
    if(index % 2 === 1 ){  //index %2
        continue;
    }
    console.log(index);
    
}


//lesson 27
function sum(a: string, b: number){
    return a + b;
}

console.log('check sum: ', sum('onizuka', 9));



//lesson28
const sum2 = (a: number, b: number) =>{
    return a + b;
}
console.log('check sum: ', sum2(5, 9));
let a =10;
a =sum2(10, 2);



//lesson29 optional parameters
let sum5 = (x :number, y: number, z?: number) =>{
    console.log(z);
    
    if(z){
        return x + y +z;
    }
    return x + y ;
}

console.log('check sum4 : ', sum5(1,2));
console.log('check sum4 : ', sum5(1,2, 3));


//lesson30
let sum7 = (x: number, y : number, z =false) =>{
    console.log(z);
    
    if(!z){
        return x + y ;
    }
    if(z){
        return x -y;
    }
}

console.log('check sum4 : ', sum7(1,2), sum7(1, 2, true));



//lesson31 

function getTotal(...numbers: number[]):number{
    let total = 0;
    numbers.forEach((num) => total+=num);
    return total;
}

// console.log('check total: ', getTotal());
// console.log('check total: ', getTotal(10, 20));
// console.log('check total: ', getTotal(10, 20, 30));

function multiply(n: number, ...m : number[]){
    return m.map((x) => x*n);
}

// console.log('check multiply: ', multiply(10, 1, 2, 3, 4));

function Greet(greeting : string, ...names: string[]):string{
    return greeting + " " + names.join(",") + "!";
}

console.log( Greet("hello", "steve", 'bill'));
console.log(Greet("hello"));


//lesson 32

function addNumber(a: number, b: number):number{
    return a + b;
}
function addString(a: string, b: string):string{
    return a + b;
}

//2 function lam nhiem vu tuong duong nhau  => co th gop thanh 1 voi union type

function add(a: string | number, b: string| number) {
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }
    if(typeof a === 'string' && typeof b === 'string'){
        return a + b;
    }
}  


function addNew(a:number, b:number) :number;
function addNew(a:string, b:string) :string;
function addNew(a : any, b: any){
    return a + b;
}

console.log('check addNew number: ', addNew(4, 6));
console.log('check addNew string: ', addNew('onizuka ', 'eikichi'));



//lesson 33
class Person{
    ssn : string;
    firstName : string;
    lastName : string;

    constructor(ssn : string, firstName : string, lastName: string){
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() : string{
        return `${this.firstName} ${this.lastName}`;
    }
}

let onizuka = new Person('40c16', 'onizuka', 'eikichi');
console.log('check class: ', onizuka.getFullName());



//lesson 34
// class Employee{
//     private empCode : string;
//     private empName : string;

//     constructor(empCode : string, empName: string){
//         this.empCode = empCode;
//         this.empName = empName;
//     }
// }

// let emp = new Employee('aaa', 'bbb');
// // emp.empCode = '40c16';
// // emp.empName = 'onizuka';

// console.log(">>> check emp: ", emp);



class Employee{
    public empCode : number;
    protected empName : string;

    constructor(empCode : number, empName: string){
        this.empCode = empCode;
        this.empName = empName;
    }
}

class SalesEmployee extends Employee{
    private department : string;

    constructor(empCode : number, empName: string, department : string){
        super(empCode, empName );
        this.department = department;
    }
}

let emp = new SalesEmployee(24, 'onizuka', 'Sales');



// console.log(">>> check emp: ", emp);



//lesson 35

class Student{
    readonly birthDay : Date;

    constructor(birthDay: Date){
        this.birthDay = birthDay;
    }
}

let student = new Student(new Date(1990, 12, 25));
console.log('check student: ',student);

// student.birthDay = new Date(1991, 12, 23);


// lesson36

class Teacher{
    private _age : number;
    public firstName : string;
    public lastName : string;

    constructor(_age: number, firstName : string, lastName: string){
        this._age = _age;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //getter
    get age(){
        return this._age;
    }

    //setter
    set age(age2 : number){
        if(age2 < 0 || age2 > 150){
            throw Error('Invalid age')
        }
        this._age = age2;
    }
}

let teacher = new Teacher(24, 'eikichi ', 'onizuka' );
let checkAge = teacher.age; //getter
teacher.age = 40; //setter
// teacher.setAge(40);
console.log('check age: ', teacher);


// lesson37

class Person3 {
    constructor(private firstName : string, private lastName : string){
        this.firstName = firstName;
        this.lastName =lastName;
    }

    getFullName(): string{
        return `${this.firstName} ${this.lastName}`
    }
    describe(): string{
        return `this is ${this.firstName} ${this.lastName}`
    }
}


class Employee3 extends Person3{
    private jobTitle : string;
    constructor(firstName : string, lastName : string, jobTitle : string){
        super(firstName, lastName);
        this.jobTitle =  jobTitle;
    }
    describe(): string{
        return ` ${super.describe()} describe`
    }
}

let employee = new Employee3('onizuka ', 'eikichi', 'teacher')

console.log('check employee ', employee);
console.log(employee.getFullName());
console.log(employee.describe());



// lesson 38

class Circle{
    static pi : number = 3.14;
    public test : number = 69;

    static calculateArea(radius : number){
        return this.pi * radius * radius;
    }
}

console.log('check pi: ', Circle.pi);
console.log('check pi: ', Circle.calculateArea(10));




// lesson 39

abstract class Employee4{
    constructor(private firstName : string, private lastName : string){
        
    }

    abstract getSalary() : number;

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    compensationStatement(): string{
        return `${this.fullName} makes ${this.getSalary()} a month`;
    }
}



class FullTimeEmployee extends Employee4{
    
    constructor(firstName : string, lastName : string, private salary : number){
        super(firstName, lastName);
        
    }
    getSalary(): number {
        return this.salary;
    }
}
class Contractor extends Employee4{
    
    constructor(firstName : string, lastName : string, private rate : number, private hour : number){
        super(firstName, lastName);
        
    }
    getSalary(): number {
        return this.rate * this.hour ;
    }
}


const user1 = new FullTimeEmployee('onizuka ', 'eikichi', 2000);
const user2 = new Contractor('onizuka ', 'eikichi', 2000, 10);

console.log('check user1: ' , user1);
console.log(user1.getSalary());

console.log('check user2: ' , user2);
console.log(user2.getSalary());