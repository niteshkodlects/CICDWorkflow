import { LightningElement ,track} from 'lwc';

export default class AccountManagerLDSForm extends LightningElement {
    @track recordid;

    sucessHandler(event){
        this.recordid=event.detail.id;
    }


}