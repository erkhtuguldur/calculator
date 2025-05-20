let a;
let b;
let operator;





function operate(a,b,op){
    switch (op){
        case "+":
            return addition(a,b);
            break;
        case "-":
            return subtraction(a,b);
            break;
        case "/":
            return division(a,b);
            break;
        default:
            return multiplication(a,b);
    }
}

function addition(a,b){
    return Number(a)+Number(b);
}
function subtraction(a,b){
    return Number(a)-Number(b);
}
function multiplication(a,b){
    return Number(a)*Number(b);
}
function division(a,b){
    return Number(a)/Number(b);
}