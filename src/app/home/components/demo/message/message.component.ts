import { Component, OnInit } from '@angular/core';
import { MessageService, Message, MessageType } from 'src/app/nebula-core';

@Component({
  selector: 'app-home-demo-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  showAlert : boolean;

  constructor(private msg: MessageService) { }

  ngOnInit( ) {
    this.showAlert = false;
  }

  openDialog(messageType: MessageType) {

    this.msg.dialog(new Message('this is message', '喜喜喜喜喜喜喜喜喜喜喜喜喜喜this is description text', messageType),'200px');
  }

  openNotification(messageType: MessageType) {

    this.msg.notification(new Message('this is messagexxxxxxxx',null,messageType))
  }

  openToast(messageType: MessageType) {
    this.msg.toast(new Message('this is message',null, messageType))
  }

  openAlert1(messageType: MessageType) {

    this.msg.alert(new Message('this is message1', null,messageType))
  }

  openAlert2(messageType: MessageType) {

    this.msg.alert(new Message('this is message2', 'this is description text', messageType))
  }

  openAlert3(messageType: MessageType) {

    this.msg.alert(new Message('this is message3', 'this is description text', messageType),true)
  }

  openAlert4(messageType: MessageType) {

    this.msg.alert(new Message('this is message4', 'this is description text', messageType),false)
  }

}
