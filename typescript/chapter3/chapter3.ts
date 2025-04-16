// lesson 40

interface IPerson {
    readonly firstName : string;
    lastName? : string;
}
// type IPerson41 = {
//     firstName : string;
//     lastName : string;
// }

function getFullName(person : IPerson)
    {
    return `${person.firstName} ${person.lastName}`;
}


let person40 ={
    firstName : 'Onizuka',
    lastName : 'Eikichi',
    address : 'Vinh Phuc',
};

console.log(getFullName(person40));


