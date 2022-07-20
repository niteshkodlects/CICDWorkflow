import { LightningElement,track, wire } from 'lwc';
import{createRecord,getRecord} from 'lightning/uiRecordApi';

const fieldArray=['Account.Name','Account.Phone','Account.Website'];


export default class AccountManagerLDS extends LightningElement {

    @track accountName;
    @track accountPhone;
    @track accountWebsite;
    @track recordId;

    @wire(getRecord,{recordId :'$recordId',fields:fieldArray})
    accountRecord;


    accountNameChangeHdlr(event){
        this.accountName=event.target.value;
    }
    accountPhoneChangeHdlr(event){
        this.accountPhone=event.target.value;
    }
    accountWesiteChangeHdlr(event){
        this.accountWebsite=event.target.value;
    }

    createAccount(){
        const fields={'Name':this.accountName,'Phone':this.accountPhone,'Website':this.accountWebsite};
        const recordInput={apiName : 'Account',fields}

        createRecord(recordInput).then(response=>{
           this.recordId=response.Id;
        }).catch(error=>{console.log('error Created:');});
    }
}