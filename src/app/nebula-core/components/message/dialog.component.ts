import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Message } from '../../services/message/message';

/* import {
    IconDefinition,
    faTimesCircle,
    faCheckCircle,
    faBell,
    faCommentAlt
} from '@fortawesome/free-regular-svg-icons'; */

@Component({
    selector: 'nebula-message-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {

    msg: Message;
    //iconType: IconDefinition

    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
        this.msg = this.data.message;

       /*  switch (this.msg.messageType) {
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
        } */

    }

    onClose() {
        this.dialogRef.close();
    }

}
