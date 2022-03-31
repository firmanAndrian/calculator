const numbers = document.querySelectorAll(".angka");

const inputan =  document.querySelector(".kalkul-input");



let prevNumber = "";
let calcOpert = "";
let currentNumber = "0";
let oprt = "";
let data = [];
let newdata = [];

// ketika oprt delete dijalankan 
let oprdlt = "";
let numberPrev = "";


const update = (number) =>{
    inputan.value = number;
};

const inputNumber = (number) =>{
    if (currentNumber === "0") {
        currentNumber = number;
    }else{
        currentNumber += number;
    }
    
    data = currentNumber.split("");

    if (oprdlt === "dlt") {
        newdata.push(number);
    } else{
        newdata = data;
    }

};

numbers.forEach((angka) =>{
    angka.addEventListener("click", (data) =>{
        inputNumber(data.target.value)
        if (angka === 0) {
            update(currentNumber)
        }else{
            update(newdata.join(""))
        }
        
    })
})
const operator = document.querySelectorAll(".opr");

const inputOpr = (opr) => {
    if (calcOpert === "") {
        prevNumber = currentNumber
    }

    if (oprdlt === "dlt") {
        currentNumber = newdata.join("");
        prevNumber = currentNumber;
    }
    
    calcOpert = opr
    currentNumber = ""
}

operator.forEach((opr) =>{
    opr.addEventListener("click", (data) =>{
        inputOpr(data.target.value)
        oprdlt = "";
    })
})

const persen = document.querySelectorAll(".opr1");

const oprtNew = (baru) =>{
    oprt = baru;
    
}
persen.forEach((oprt) =>{
    oprt.addEventListener("click",(data)=>{
        oprtNew(data.target.value);
        kalkulasiNew();
        update(currentNumber);
    })
})

const kalkulasi = ()=>{
    let result = "";
    switch (calcOpert) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        default:
            return;
    }
    currentNumber = result;
    calcOpert = "";
}
const kalkulasiNew = () =>{
    let result = "";
    switch (oprt) {
        case "%":
            result = parseFloat(currentNumber) / 100;
            break;
        case "x2":
            result = parseFloat(currentNumber) * parseFloat(currentNumber);
            break;
        default:
            return;
    }
    currentNumber = result;
    oprt = "";
}

const hasil = document.querySelector(".equal");

hasil.addEventListener("click",()=>{
    kalkulasi();
    update (currentNumber)
})

const clear = document.querySelector(".a-c");

const clearAll = () =>{
    prevNumber = ""
    calcOpert = ""
    currentNumber = "0"
    data = [];
    newdata=[];
    oprdlt = "";
}

clear.addEventListener("click",() =>{
    clearAll()
    update(currentNumber)
})

const dlt = document.querySelector(".dlt");



dlt.addEventListener("click", (dele)=>{
    newdata.pop()
    oprdlt = dele.target.value;
    update(newdata.join("")); 
    
})

const decimal = document.querySelector(".decimal")

const inputDec = (dot) =>{
    currentNumber += dot;
}

decimal.addEventListener("click",(data)=>{
    inputDec(data.target.value);
    update(currentNumber);
    
})
