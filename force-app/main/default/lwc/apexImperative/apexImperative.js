import { LightningElement } from 'lwc';
import getAccount from '@salesforce/apex/AccountService.getAccount'
export default class ApexImperative extends LightningElement {
    accountList=''

    handleClick(){

        getAccount().then(data=>{
            this.accountList=data;
        }).catch(error=>{
            console.error(error);
        })
    }
}