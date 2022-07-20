import { LightningElement,wire } from 'lwc';
import getCase from '@salesforce/apex/CaseController.getCases'
export default class CaseSearchComponent extends LightningElement {
 searchText=''


  @wire(getCase)
  accountList



    changeHandler(event){

        this.searchText=event.target.value;
    }
}