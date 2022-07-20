import { LightningElement } from 'lwc';
import createAccount from '@salesforce/apex/AccountManager.CreateAccount';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class CreateAccount extends LightningElement {

    recordId;
    firstName;
    lastName;
    firstNameHandler(event){
        this.firstName=event.target.value;

    }
    lastNameHandler(event){
        this.lastName=event.target.value;

    }

    createAccount(){
        createAccount({firstName:this.firstName,lastName:this.lastName}).then(response=>{
            this.recordId=response;
            const showToast=new  ShowToastEvent({
                title: 'Account Manager',
                message: 'Account Created Sucessfully.',
                variant:'success'
            
             });

            this.dispatchEvent(showToast);
        }).catch(error=>{

        });

    }
}