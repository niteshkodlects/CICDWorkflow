import { LightningElement, wire,track } from 'lwc';
import getAccount from '@salesforce/apex/SearchService.getAccounts'

export default class SeachComponent extends LightningElement {
     searchText='';
    

    @wire(getAccount,{searchText:'$searchText'})
    accounts;


    changeHandler(event){
        this.searchText=event.target.value;
    }
}