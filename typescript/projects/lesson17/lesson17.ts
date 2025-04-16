function handleException(errorMessage : string): never{
    throw Error(errorMessage);
}

function runinfinity(): void{
    // while(true){
    //     console.log('running...');
        
    // }
}

// handleException('just a test error');
let a = runinfinity();
console.log('check a: ', a );
