import { Component, OnInit, QueryList, OnDestroy } from '@angular/core';
import { MessageService } from '../../services/message/message.service';
import { Subscription } from 'rxjs';
import { Message } from '../../services/message/message';

/* import {
  IconDefinition,
  faTimesCircle,
  faCheckCircle,
  faBell,
  faCommentAlt
} from '@fortawesome/free-regular-svg-icons'; */
import { Alert } from '../../services/message/alert';

@Component({
  selector: 'nebula-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  messageSubscription: Subscription;
  //iconType: IconDefinition
  isSizeSmall: boolean;
  alert : Alert;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageSubscription = this.messageService.changes.subscribe(
      alert => {
        if (alert) {
         this.alert = alert;
         this.isSizeSmall = alert.isSizeSmall;

          switch (this.alert.message.messageType) {
            case 'Info': {
              //this.iconType = faCommentAlt;
              break;
            }
            case 'Warning': {
              //this.iconType = faBell;
              break;
            }
            case 'Success': {
              //this.iconType = faCheckCircle;
              break;
            }
            case 'Error': {
             // this.iconType = faTimesCircle;
              break;
            }
          }
        } else {
          this.alert = null;
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
