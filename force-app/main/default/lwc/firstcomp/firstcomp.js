import { LightningElement } from 'lwc';

export default class Firstcomp extends LightningElement {

    time="8:15";
    greeting="Good Morning";

    getTime(){
        const date=new date();
        this.time=date;



    }
}