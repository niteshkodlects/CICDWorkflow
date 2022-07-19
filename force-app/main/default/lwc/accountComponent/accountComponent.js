import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountService.getAccount'
import getAccount from '@salesforce/apex/AccountService.getAccountWithSearch'

export default class AccountComponent extends LightningElement {
    searchText=''
    @wire(getAccounts,{searchText:'$searchText'})
    accounts;

   

    @wire(getAccount,{searchText:'$searchText'})
    accountList

    changeHandler(event){
        this.searchText=event.target.value;
    }


}