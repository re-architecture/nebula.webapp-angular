import { Component, OnInit, Input } from '@angular/core';
import { MessageService, Message } from 'src/app/nebula-core';

@Component({
  selector: 'main-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() picture: String;
  @Input() header: String;
  @Input() title: string;
   
  constructor(private msg: MessageService) { }

  ngOnInit() {
  }

  openError() {
    this.msg.toast(new Message("Application.ServerError - Connection to server is offline",null, 'Error'))
  }
}
