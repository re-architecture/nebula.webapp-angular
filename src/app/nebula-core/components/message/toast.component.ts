import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';
import { Message } from '../../services/message/message';

/* import {
  IconDefinition,
  faTimesCircle,
  faCheckCircle,
  faBell,
  faCommentAlt
} from '@fortawesome/free-regular-svg-icons'; */

@Component({
  selector: 'nebula-message-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToastComponent implements OnInit {
  //iconType: IconDefinition
  msg: Message;

  constructor(
    public snackBarRef: MatSnackBarRef<ToastComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {

    this.msg = this.data.message;
    switch (this.msg.messageType) {
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
        //this.iconType = faTimesCircle;
        break;
      }
    }
  }


  onClose() {
    this.snackBarRef.dismiss();
  }

}
