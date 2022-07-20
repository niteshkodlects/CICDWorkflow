import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
 firstNumber;
 secondNumber;
 result;
 numberChangeHandler(event){

    if(event.target.name ==='First Number'){
        this.firstNumber=event.target.value;
    }
    
    if(event.target.name ==='Second Number'){
        this.secondNumber=event.target.value;
    }
 }

 add(){
     const first=parseInt(this.firstNumber);
     const second =parseInt(this.secondNumber);

    this.result= 'Addtion of '+first+' and '+second +' is '+(first+second);

 }

 subtract(){
    const first=parseInt(this.firstNumber);
    const second =parseInt(this.secondNumber);

   this.result= 'Subtraction of '+first+' and '+second +' is '+(first-second);

}
multiply(){
    const first=parseInt(this.firstNumber);
    const second =parseInt(this.secondNumber);

   this.result= 'multiplicaiton of '+first+' and '+second +' is '+(first*second);

}
divide(){
    const first=parseInt(this.firstNumber);
    const second =parseInt(this.secondNumber);

   this.result= 'division of '+first+' and '+second +' is '+(first/second);

}
}