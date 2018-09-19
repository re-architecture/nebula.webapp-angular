import { Component, OnInit, QueryList, OnDestroy } from '@angular/core';
import { MessageService } from '../../services/message/message.service';
import { Subscription } from 'rxjs';
import { Message } from '../../services/message/message';

import {
  IconDefinition,
  faTimesCircle,
  faCheckCircle,
  faBell,
  faCommentAlt
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'nebula-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  messageSubscription: Subscription;
  msg: Message
  iconType: IconDefinition
  isSizeSmall: boolean;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageSubscription = this.messageService.changes.subscribe(
      alert => {
        this.msg = alert.message;
        this.isSizeSmall = alert.isSizeSmall;

        switch (this.msg.messageType) {
          case 'Info': {
            this.iconType = faCommentAlt;
            break;
          }
          case 'Warning': {
            this.iconType = faBell;
            break;
          }
          case 'Success': {
            this.iconType = faCheckCircle;
            break;
          }
          case 'Error': {
            this.iconType = faTimesCircle;
            break;
          }
        }
      });
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }

  getClassForSizeSmall(): string {
    if (this.isSizeSmall) {
      return 'alert-sm'
    } else {
      return ''
    }
  }

}
