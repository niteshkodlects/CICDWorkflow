import { LightningElement,track } from 'lwc';
import getContactList from '@salesforce/apex/AccountContactController.getcontacts';
import { updateRecord } from 'lightning/uiRecordApi';
import deleteSelectedContacts from '@salesforce/apex/AccountContactController.deleteSelectedContacts';
 
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import ID_FIELD from '@salesforce/schema/Contact.Id';

const COLS = [
    { label: 'First Name', fieldName: 'FirstName', editable: true },
    { label: 'Last Name', fieldName: 'LastName', editable: true },
    { label: 'Title', fieldName: 'Title' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Email', fieldName: 'Email', type: 'email' }
];

export default class AccountContactcmp extends LightningElement {
@track accountName;

@track contacts;

@track selectedRecords = [];
recordsCount;

@track isTrue = false;
refreshTable;
    columns = COLS;
    draftValues = [];
    onKeyChange(event){
    this.accountName =  event.target.value;

}

    onClickHandler(event){


        
        getContactList({ accountName: this.accountName })
        .then(result => {
            this.contacts = result;
        })
        .catch(error => {
            this.error = error;
        });


    }
    handleSave(event) {

        const fields = {}; 
        fields[ID_FIELD.fieldApiName] = event.detail.draftValues[0].Id;
        fields[FIRSTNAME_FIELD.fieldApiName] = event.detail.draftValues[0].FirstName;
        fields[LASTNAME_FIELD.fieldApiName] = event.detail.draftValues[0].LastName;

        const recordInput = {fields};

        updateRecord(recordInput)
        .then(() => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Contact updated',
                    variant: 'success'
                })
            );
            // Display fresh data in the datatable
            return refreshApex(this.contacts).then(() => {

                // Clear all draft values in the datatable
                this.draftValues = [];

            });
        }).catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error updating or reloading record',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        });}


        handleDelete(event){
           // this.deleteList = event.detail.row;

            const selectedRows = event.detail.selectedRows;
            this.recordsCount = event.detail.selectedRows.length;
            this.selectedRecords=new Array();
            for (let i = 0; i < selectedRows.length; i++) {
                this.selectedRecords.push(selectedRows[i]);
            }   
        }



        deleteRecords() {
            if (this.selectedRecords) {
                this.buttonLabel = 'Processing....';
                this.isTrue = true;
                deleteSelectedContacts({contactLst: this.selectedRecords }).then(result => {
                    window.console.log('result ====> ' + result);
                    this.buttonLabel = 'Delete Records';
                    this.isTrue = false;
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success!!',
                            message: this.recordsCount + ' records are deleted.',
                            variant: 'success'
                        }),
                    );
                    this.template.querySelector('lightning-datatable').selectedRows = [];
                    this.recordsCount = 0;
                    return refreshApex(this.contacts);
                }).catch(error => {
                    this.buttonLabel = 'Delete Records';
                    this.isTrue = false;                
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Error while getting Contacts',
                            message: JSON.stringify(error),
                            variant: 'error'
                        }),
                    );
                });
            }}

}