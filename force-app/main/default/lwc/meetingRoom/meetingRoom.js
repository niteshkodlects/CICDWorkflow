import { LightningElement,api, wire } from 'lwc';
import {fireEvent} from 'c/pubsub';
import {currentPageReference} from 'lightning/navigation';
export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo;
 @wire(currentPageReference)
 pageref;
    handleClick(){

        const tileClicked =new CustomEvent('tileclick',{
            detail:this.meetingRoomInfo
        })
        this.dispatchEvent(tileClicked);
        fireEvent(this.pageref,'pubsubtileclick',this.meetingRoomInfo);
    }

}