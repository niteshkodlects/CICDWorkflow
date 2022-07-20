import { api, LightningElement,track } from 'lwc';

export default class MeetingRooms extends LightningElement {
@track roomDetail;
     meetingRooms=[{roomName:'A-01',roomCapacity:'12'},
    {roomName:'A-02',roomCapacity:'1'},
    {roomName:'A-03',roomCapacity:'15'},
    {roomName:'A-04',roomCapacity:'2'},
    {roomName:'A-05',roomCapacity:'6'},
    {roomName:'A-06',roomCapacity:'2'},

];

handleRoom(event)
{
  const meetingRoomInfo=  event.detail;
this.roomDetail=meetingRoomInfo.roomName;
}
}