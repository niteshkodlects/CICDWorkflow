import { LightningElement, track,wire } from 'lwc';
import { register,
    unregister,
    fire,
    unregisterAll} from 'c/pubsub';
import {currentPageReference} from 'lightning/navigation';
export default class SelectedMeetingRoom extends LightningElement {

    @track roomDetail={};
    connectedCallback(){
        register('pubsubtileclick',this.meetingRoom,this)
    }
    disconnectedCallback(){
        unregisterAll(this);
    }

    @wire(currentPageReference)
 pageref;

 meetingRoom(payload){
this.roomDetail =payload;
 }

 
}