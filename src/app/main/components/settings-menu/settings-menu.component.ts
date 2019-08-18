import { Component, OnInit } from '@angular/core';
import { MessageService, Message } from 'src/app/nebula-core';

@Component({
  selector: 'main-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss']
})
export class SettingsMenuComponent implements OnInit {

  constructor(private msg: MessageService) { }

  ngOnInit() {
  }

  openError() {
    this.msg.toast(new Message("Application.ServerError - 0 Unknown Error",null, 'Error'))
  }

}
