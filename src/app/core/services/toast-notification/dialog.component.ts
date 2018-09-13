import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
    animal: string;
    name: string;
}

@Component({
    selector: 'app-core-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    //encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
      
    }

    onClose() {
        this.dialogRef.close();
    }

}
