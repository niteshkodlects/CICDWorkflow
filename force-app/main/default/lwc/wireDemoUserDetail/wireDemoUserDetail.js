import { LightningElement, wire } from 'lwc';
import getAccount from '@salesforce/apex/AccountService.getAccounts'
export default class WireDemoUserDetail extends LightningElement {
 selectedType=''

 @wire(getAccount,{Type:'$selectedType'})
 accountList;

 get pickOptions(){
    return [
        {label:"Customer - Channel",value:"Customer - Channel" },
        {label:"Customer - Direct",value:"Customer - Direct" }
        
    ]
 }
 typeHandler(event){

    this.selectedType=event.target.value;
 }

}