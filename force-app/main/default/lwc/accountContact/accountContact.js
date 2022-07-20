import { LightningElement, wire } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNTNAME from '@salesforce/schema/Account';
import ACCOUNTNAMEFIELD from '@salesforce/schema/Account.Name';
import getAccount from '@salesforce/apex/CarController.getAccounts';
export default class AccountContact extends LightningElement {
    accountId
    name='';

    handleNameChange(event){
        this.accountId=undefined;
            this.name=event.target.value;
    }

    createAccount(){
            const fields={};
            fields[ACCOUNTNAMEFIELD.fieldApiName]=this.name;
            const record ={apiName: ACCOUNTNAME.objectApiName,fields};
            createRecord(record).then(account=>{
                this.accountId = account.id;
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Success',
                        message: 'Account created',
                        variant: 'success',
                }),
                );

            }).catch(error=>{
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });

    }
}