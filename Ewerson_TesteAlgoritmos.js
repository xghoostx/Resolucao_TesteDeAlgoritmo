function createCheckDigit(membershipId) {

    let result = membershipId.split(''); // This function splits the array
    let resultInt = result.map(Number); // This function convert to integer
    let sum = resultInt.reduce((sum, resultInt) => sum + resultInt); // This function sum the array

    if (sum >= 0 && sum  <= 9) {

        console.log(sum);

    } else {

        let correct = sum.toString(); // This function convert to string
        correct = correct.split('');
        let correctInt = correct.map(Number);
        final = correctInt.reduce((final, correctInt) => final + correctInt);
        
        console.log(final);

    }
}

createCheckDigit('55555');