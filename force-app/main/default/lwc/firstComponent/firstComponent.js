import { LightningElement,track} from 'lwc';

export default class FirstComponent extends LightningElement {
    fulName="Hero";
    title="aura"
    @track address={
        city:"Melborne",
        country:"Australia"
    }
    changeHandler(event){
        this.title=event.target.value;

    }

    trackHandler(event){

        this.address.city=event.target.value;
    }
    users=["nitesh","kodle"]

    get getName(){

        return this.users[0];
    }
}