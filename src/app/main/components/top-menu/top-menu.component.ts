import { Component, OnInit } from '@angular/core';
import { MessageService, Message } from 'src/app/nebula-core';

@Component({
  selector: 'main-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  constructor(private msg: MessageService) { }

  ngOnInit() {
  }

  openError() {
    this.msg.toast(new Message("Application.ServerError - Connection to server is offline",null, 'Error'))
  }

}
