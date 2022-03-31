const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) =>{
        console.log(event.target.value);
    });   
});

let prevNumber = " ";
let calculationOperator = " ";
let currentNumber = "0";

const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number;
    } else{
        currentNumber += number;
    }    
};

numbers.forEach((number) => {
    number.addEventListener("click", (event) =>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });   
});

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) =>{
    operator.addEventListener("click", (event) =>{
        inputOperator(event.target.value);
    });
});

const inputOperator = (operator) => {
    if (calculationOperator === "") {
        prevNumber = currentNumber
    };
    calculationOperator = operator;
    currentNumber = "";
};

//.......Tambahkan click event ke tombol sama dengan.......//
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () =>{
    calculate();
    updateScreen(currentNumber);
});

//..........Definisikan function calculate...............//
const calculate = () =>{
    let result = ""
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break       
    };
    // Simpan hasil kalkulasi ke current number
    currentNumber = result;
    calculationOperator = " ";
};

//...........Membuat tombol AC berjalan lancar.............//
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () =>{
    clearAll();
    updateScreen(currentNumber);
});

const clearAll = () => {
    prevNumber = ""
    calculationOperator = ""
    currentNumber = "0"
};

//Membuat aplikasi dapat mengkalkulasi angka desimal//
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) =>{
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

inputDecimal = (dot) => {
    if(currentNumber.includes(".")){
        return
    };
    currentNumber += dot;
};