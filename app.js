class Calculator{
    constructor(secondOperandTextElem, firstOperandTextElem){
        this.secondOperandTextElem=secondOperandTextElem;
        this.firstOperandTextElem=firstOperandTextElem;
        this.clear();
    }

    clear(){
        
        this.firstOperand = '';
        this.secondOperand = '';
        this.operation=undefined;

    }

    delete(){
        this.firstOperand=this.firstOperand.toString().slice(0, -1);
    }

    appendNumber(number){
        if(number==='.' && this.firstOperand.includes('.')) return;
        this.firstOperand = this.firstOperand.toString() + number.toString();
    }

    chooseOperation(operation){
        if(this.firstOperand==='') return;
        if(this.secondOperand!==''){
            this.compute();
        }
        this.operation=operation;
        this.secondOperand=this.firstOperand;
        this.firstOperand='';
    }

    compute(){
        let computation;
        const sec = parseFloat(this.secondOperand);
        const fir = parseFloat(this.firstOperand);
        if(isNaN(sec) || isNaN(fir)) return;
        switch(this.operation){
            case '+':
                computation = sec + fir;
                break;
            case '-':
                computation = sec - fir;
                break;
           case '/':
            computation = sec / fir;
            break;
           case '*':
            computation = sec * fir;
            break;
        default:
            return;
        }
        this.firstOperand = computation;
        this.operation = undefined;
        this.secondOperand = '';
    }

    updateDisplay(){
        this.firstOperandTextElem.innerText = this.firstOperand;
        this.secondOperandTextElem.innerText=this.secondOperand;
    }

}



const numberButton = document.querySelectorAll('[data-number]');
const operand = document.querySelectorAll('[data-operation]');
const equalSign = document.querySelector('[data-equals]');
const clear = document.querySelector('[data-clear]');
const del = document.querySelector('[data-del]');
const firstOperandTextElem = document.querySelector('[data-firstOperand]');
const secondOperandTextElem = document.querySelector('[data-secondOperand]');

const calculator = new Calculator(secondOperandTextElem, firstOperandTextElem);

numberButton.forEach(button =>{
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operand.forEach(button =>{
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalSign.addEventListener('click', button =>{
    calculator.compute();
    calculator.updateDisplay();
})

clear.addEventListener('click', button =>{
    calculator.clear();
    calculator.updateDisplay();
})

del.addEventListener('click', button =>{
    calculator.delete();
    calculator.updateDisplay();
}
)