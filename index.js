const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function getLength() {
    let lengthEl = document.getElementById('pwd-length');
    let pwdLength = lengthEl.value;
    if (/\D+/g.test(pwdLength) || pwdLength < 6 || pwdLength > 32) {
        alert('You should input a number between 6 and 32');
    } else {
        return pwdLength;
    }
}

function getSymbolsAllow() {
    let symbolsEl = document.getElementById('pwd-symbols');
    return symbolsEl.checked;
}

function getNumbersAllow() {
    let numbersEl = document.getElementById('pwd-numbers');
    return numbersEl.checked;
}

function generatePasswords() {
    let firstPwdEl = document.getElementById('first-pwd-field');
    let secondPwdEl = document.getElementById('second-pwd-field');

    let length = getLength();
    let useSymbols = getSymbolsAllow();
    let useNumbers = getNumbersAllow();

    let characters = letters.slice();
    let firstPwd = '';
    let secondPwd = '';

    if (useSymbols) {
        characters = characters.concat(symbols);
    }
    if (useNumbers) {
        characters = characters.concat(numbers);
    }
    
    while (firstPwd.length < length && secondPwd.length < length) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        firstPwd += characters[randomIndex];
        randomIndex = Math.floor(Math.random() * characters.length);
        secondPwd += characters[randomIndex];
    }

    firstPwdEl.textContent = firstPwd;
    secondPwdEl.textContent = secondPwd;
}

function copyPassword(event) {
    if (event.target.textContent.length > 0) {
        navigator.clipboard
        .writeText(`${event.target.textContent}`)
        .catch(() => {
            alert('Access denied');
        });
    }
}