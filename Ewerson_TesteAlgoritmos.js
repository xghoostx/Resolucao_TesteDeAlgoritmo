let sum, validation;

const createCheckDigit = (membershipId) => {
    if (!membershipId || typeof membershipId === 'string' && !membershipId.trim()) console.log('Valor inválido');
    if (membershipId < 0) console.log('Digite um valor positivo');

    sum = membershipId.split('').map(Number).reduce((sum, number) => sum + number).toString(); 
    validation = sum.split('').length; 

    if (validation == 1) console.log(sum);
}

createCheckDigit('55555');

while (validation != 1) createCheckDigit(sum);

