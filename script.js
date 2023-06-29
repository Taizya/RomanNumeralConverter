let input = document.getElementById('input');
let button = document.getElementById('submit');

let errorMessage = document.getElementById('error');
let output = document.getElementById('output')


const romanObject ={
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    XXX: 30,
    XX: 20,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    III: 3,
    II: 2,
    I: 1,
}


function convertToRoman(){

    let num = parseInt(input.value)

    if (num <= 0) {
        errorMessage.innerHTML = 'invalid input'
        return false
    }

    if (num >= 3999) {
        errorMessage.innerHTML = 'the number you entered is out of range'
        return false
    }

    const romanValues = Object.keys(romanObject)
    let result = ''

    romanValues.forEach(key => {
        while(romanObject[key] <= num){
            num -= romanObject[key]
            result += key
        }
    });

    output.innerHTML = result
}

button.addEventListener('click', convertToRoman)

