


//lesson30

let sum6 = (x, y, z =false) =>{
    console.log(z);
    
    if(!z){
        return x + y ;
    }
    if(z){
        return x -y;
    }
}

console.log('check sum4 : ', sum6(1,2), sum6(1, 2, 3));



//lesson29 optional parameters
// let sum4 = (x, y, z) =>{
//     console.log(z);
    
//     if(z){
//         return x + y +z;
//     }
//     return x + y ;
// }

// console.log('check sum4 : ', sum4(1,2));