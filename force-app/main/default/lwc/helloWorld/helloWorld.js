import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    dynamicGreeting = "World";

     handleChange(event){
         this.dynamicGreeting=event.target.value;

     }

}