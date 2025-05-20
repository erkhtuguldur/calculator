let first=0;
let second;
let operator;
const scr=document.querySelector("#screen");
const zeroBtn=document.querySelector("#zero");
const oneBtn=document.querySelector("#one");
const twoBtn=document.querySelector("#two");
const threeBtn=document.querySelector("#three");
const fourBtn=document.querySelector("#four");
const fiveBtn=document.querySelector("#five");
const sixBtn=document.querySelector("#six");
const sevenBtn=document.querySelector("#seven");
const eightBtn=document.querySelector("#eight");
const nineBtn=document.querySelector("#nine");
const addBtn=document.querySelector("#add");
const subtractBtn=document.querySelector("#subtract");
const divideBtn=document.querySelector("#divide");
const multiplyBtn=document.querySelector("#multiply");
const equalsBtn=document.querySelector("#equals");
const pointBtn=document.querySelector("#point");
const clearBtn=document.querySelector("#clear");
const signBtn=document.querySelector("#sign");
const percentBtn=document.querySelector("#percent");

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

function display(a,e){
    if(scr.textContent.length<8){
        scr.textContent+=a;
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

oneBtn.addEventListener("click",function (e){
    display(1,e);
});
twoBtn.addEventListener("click",function (e){
    display(2,e);
});
threeBtn.addEventListener("click",function (e){
    display(3,e);
});
fourBtn.addEventListener("click",function (e){
    display(4,e);
});
fiveBtn.addEventListener("click",function (e){
    display(5,e);
});
sixBtn.addEventListener("click",function (e){
    display(6,e);
});
sevenBtn.addEventListener("click",function (e){
    display(7,e);
});
eightBtn.addEventListener("click",function (e){
    display(8,e);
});
nineBtn.addEventListener("click",function (e){
    display(9,e);
});
zeroBtn.addEventListener("click",function (e){
    display(0,e);
});
pointBtn.addEventListener("click",function (e){
    display(".");
});
// oneBtn.addEventListener("click",function (e){
//     display(1);
// });
// oneBtn.addEventListener("click",function (e){
//     display(1);
// });
// oneBtn.addEventListener("click",function (e){
//     display(1);
// });
// oneBtn.addEventListener("click",function (e){
//     display(1);
// });
// oneBtn.addEventListener("click",function (e){
//     display(1);
// });
// oneBtn.addEventListener("click",function (e){
//     display(1);
// });
// oneBtn.addEventListener("click",function (e){
//     display(1);
// });
// oneBtn.addEventListener("click",function (e){
//     display(1);
// });