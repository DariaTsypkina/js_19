class Calc {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    static sum(a, b) {
        return +a + +b;
    }
    
    static sub(a, b) {
        return a - b;
    }
    
    static multi(a, b) {
        return a * b;
    }
    
    static div(a, b) {
        return a / b;
    }
}


function defineNum1() {
    let num1 = document.getElementById('number0').value;
    return num1;
}   

function defineNum2() {
    let num2 = document.getElementById('number1').value;
    return num2;
}

document.getElementById('result').innerHTML = "";

function sum() {
    let result = Calc.sum(defineNum1(), defineNum2());
    document.getElementById('result').innerHTML = result;
}

function substract() {
    let result = Calc.sub(defineNum1(), defineNum2());
    document.getElementById('result').innerHTML = result;
}

function multiply() {
    let result = Calc.multi(defineNum1(), defineNum2());
    document.getElementById('result').innerHTML = result;
}

function division() {
    let result = Calc.div(defineNum1(), defineNum2());
    if (defineNum2() == 0) {
        alert("На ноль делить нельзя!")
        document.getElementById('result').innerHTML = "";
        return false;
    } else document.getElementById('result').innerHTML = result.toFixed(3);
}
