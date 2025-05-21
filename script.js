let firstOperand=null;
let secondOperand=null;
let operator=null;
let selected=null;
const scr=document.querySelector("#screen");
scr.textContent="0";
const buttons=document.querySelectorAll("button");

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

function handler(e){
    if(e.target.classList.contains("numbers")){
        addOperands(e.target.textContent);
    }
    else if(e.target.classList.contains("operations")){
        addOperator(e.target.textContent);
        if(selected===null){
        e.target.classList.add("selected");
        selected=e.target;}
        else {
            selected.classList.remove("selected");
            e.target.classList.add("selected");
            selected=e.target;
        }
    }
    else{
        switch(e.target.id){
            case "clear":
                clear();
                break;
            case "percent":
                addPercent();
                break;
            case "sign":
                addSign();
                break;
            case "equals":
                addEquals();
                break;
        }
    }
}

function updateScreen(num,append){
    let value= scr.textContent;
    if(append){
        if(value.length>=8){
            return;
        }
        value+=num;
    }
    else{
        value=num.toString();
    }

    if(value.length>8){
         value=value.substring(0,8);
    }
    scr.textContent=value;

}



function addOperands(num){
    if(num==="."){
        addPoint();
        return;
        
    }
    if(firstOperand===null){
        if(scr.textContent=="0"){
            updateScreen(num,false);
        }
        else{
            if(scr.textContent.length<8){
            updateScreen(num,true);
        }
        }
    }
    else{
        if(scr.textContent==firstOperand){
            updateScreen(num,false);
        }
        else{
            if(scr.textContent.length<8){
            updateScreen(num,true);
        }
        }
    }
}

function addSign(sign){
    if(scr.textContent!="0"){
        updateScreen(Number(scr.textContent)*(-1)+"",false);
    }
}

function addOperator(op) {
    if (firstOperand === null) {
        firstOperand = scr.textContent;
        operator = op;
    }
    else {
        if (operator !== null) {
            secondOperand = scr.textContent;
            let result = operate(firstOperand, secondOperand, operator);
            updateScreen(result, false);
            firstOperand = result;
            secondOperand = null;
        } else {
            firstOperand = scr.textContent;
        }
        operator = op;
    }
}

function addEquals(){
    if(firstOperand!==null && operator!==null){
        secondOperand=scr.textContent;
        let result=operate(firstOperand,secondOperand,operator);
        updateScreen(result,false);
        firstOperand=result;
        secondOperand=null;
        operator=null;
        if(selected){
        selected.classList.remove("selected");
        selected=null;
    }}
}
function addPoint(){
if(scr.textContent.length<8 && !scr.textContent.includes(".")){
    updateScreen(".",true);
}
}
function clear(){
firstOperand=null;
secondOperand=null;
operator=null;
updateScreen("0",false);
selected.classList.remove("selected");
selected=null;

}

function addPercent(){
updateScreen(Number(scr.textContent)/100,false);
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

function init(){
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click",handler);
    }
}

init();