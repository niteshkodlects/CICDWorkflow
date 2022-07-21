import { LightningElement, wire } from 'lwc';
import getCars from '@salesforce/apex/CarController.getCars'
import getAccounts from '@salesforce/apex/AccountService.getAccount'
import {subscribe,MessageContext} from 'lightning/messageService'
//import CARS_FILTERED_MESSAGE from '@salesforce/messageChannel/carsFiltered__c'
export default class CarTileList extends LightningElement {
cars
error
carFiletrSubscription
filter={}
    @wire(getCars,{filter:'$filter'})
    carHandler({data,error}){
        if(data){
                this.cars =data;
        }if(error){
this.error=error;
        }
    }

@wire(MessageContext)
MessageContext

connectedcallback(){
    this.subscribeHandler()
}
subscribeHandler(){
//this.carFiletrSubscription=subscribe(this.MessageContext,CARS_FILTERED_MESSAGE,(message)=>this.handleFilterChanges(message))

}

handleFilterChanges(message){
 console.log('variable:', message.filters);
}
}