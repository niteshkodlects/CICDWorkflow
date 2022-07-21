import { LightningElement,wire,track } from 'lwc';
import {getPicklistValues,getObjectInfo} from 'lightning/uiObjectInfoApi'
import CAR_OBJECT from '@salesforce/schema/Car__c'
import CAR_FIELD from '@salesforce/schema/Car__c.Category__c'
import CAR_FIELD_MAKE from '@salesforce/schema/Car__c.Make__c'
import {publish,MessageContext} from 'lightning/messageService'


import getAccounts from '@salesforce/apex/AccountService.getAccount'
export default class CarFilter extends LightningElement {

 //   @api recordId

  @track filter={
      searchKey :  '',
      maxPrice:999999
  }

  @wire(MessageContext)
  messageContext


  @wire(getObjectInfo,{objectApiName:CAR_OBJECT})
  carObjectInfo

  @wire(getPicklistValues,{
      recordTypeId: '$carObjectInfo.data.defaultRecordTypeId',
      fieldApiName: CAR_FIELD
  })categories

  
  @wire(getPicklistValues,{
    recordTypeId: '$carObjectInfo.data.defaultRecordTypeId',
    fieldApiName: CAR_FIELD_MAKE
    })makers


    handleSearchKeyChange(event){
        this.filter.searchKey=event.target.value;
        sendDataToCarList
    }

    handleMaxPriceChange(event){
        this.filter.maxPrice=event.target.value;
    }

    handleCheckbox(event){
        const{name,value}=event.target;

    }

    sendDataToCarList(){

       /* publish(this.messageContext,CARS_FILTERED_MESSAGE,{
            filters:this.filter
        })*/
    }

}