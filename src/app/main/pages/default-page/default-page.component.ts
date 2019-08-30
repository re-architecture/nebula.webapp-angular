import { Component, OnInit } from '@angular/core';
import { MessageService, MessageType, Message } from 'src/app/nebula-core';

@Component({
  selector: 'main-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {

  constructor(private msg: MessageService) { }

  ngOnInit() {
  }

  openError() {
    this.msg.toast(new Message("Application.ServerError - Connection to server is offline",null, 'Error'))
  }
  
}
