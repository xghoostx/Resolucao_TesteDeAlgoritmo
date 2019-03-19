function createCheckDigit(membershipId) {

    if (!membershipId||typeof membershipId === 'string' && !membershipId.trim()) console.log('Valor inválido');
    if(membershipId < 0) console.log('Digite um valor positivo');

    let result = membershipId.split(''); // This function splits the array
    let resultInt = result.map(Number); // This function convert to integer
    let sum = resultInt.reduce((sum, resultInt) => sum + resultInt); // This function sum the array
    let test = sum.toString().split(''); // This function convert to string
    let validation = test.length;
    
    if(validation == 1) console.log(sum);
    while(validation != 1){

        result = sum.toString().split(''); 
        resultInt = result.map(Number); 
        sum = resultInt.reduce((sum, resultInt) => sum + resultInt); 
        test = sum.toString().split(''); 
        validation = test.length;
        
        if(validation == 1) console.log(sum);
    }
}
createCheckDigit('55555');