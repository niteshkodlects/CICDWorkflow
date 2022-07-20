import { LightningElement, track } from 'lwc';

export default class CalComponent extends LightningElement {
    cityList=['Jaipur','bangalore'];
     displayDiv = false;

    checkBoxHandler(event){
        this.displayDiv=event.target.checked;
    }

}