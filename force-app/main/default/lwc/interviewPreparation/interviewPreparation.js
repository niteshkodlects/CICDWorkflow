import { LightningElement,wire } from 'lwc';

import getAccount from '@salesforce/apex/AccountService.getAccountWithSearch';
export default class InterviewPreparation extends LightningElement {

    searchText='';
    
    @wire(getAccount)
    accounts


    changeHandler(event){
            this.searchText=event.target.value;

    }
}