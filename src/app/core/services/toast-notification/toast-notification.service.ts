// https://github.com/angular/material2/issues/3577
// https://github.com/angular/material2/issues/1581
// https://github.com/angular/material2/tree/master/src/demo-app/snack-bar
// https://github.com/angular/material2/blob/master/src/lib/snack-bar/snack-bar.md#sharing-data-with-a-custom-snack-bar

//https://scttcper.github.io/ngx-toastr/
//https://pixinvent.com/apex-angular-4-bootstrap-admin-template/demo-1/components/toastr

import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatDialog } from '@angular/material';
import { ToastNotifierComponent } from './toast-notifier.component';
import { DialogComponent } from './dialog.component';


export enum MessageType {
  Info = 'Info',
  Success = 'Success',
  Warning = 'Warning',
  Error = 'Error'
  
}

@Injectable(
  { providedIn: 'root' }
)
export class ToastNotificationService {

  setAutoHide = true;
  autoHide = 2000;
  addExtraClass = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(public snackBar: MatSnackBar,private dialog : MatDialog) {

    
   }

  info(message: string) {
    this.openSnackBar(message, MessageType.Info);
  }

  success(message: string) {
    this.openSnackBar(message, MessageType.Success);
  }

  
  warning(message: string) {
    this.openSnackBar(message, MessageType.Warning);
  }

  error(message: string) {
    this.openSnackBar(message, MessageType.Error);
  }

  openDialog(message : string,title?: string,messageType?: MessageType): void {
    let dialogTitle : string;
    let dialogMessageType : string;

    if(title){
      dialogTitle = title;
    }else{
      dialogTitle = 'Info';
    }

    if(messageType){
      dialogMessageType = messageType;
    }else{
      dialogMessageType = 'Info';
    }

    const dialogRef = this.dialog.open(DialogComponent, {
     
      data: {message,title : dialogTitle ,messageType : dialogMessageType }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
    });
  }


  private openSnackBar(message: string, messageType: MessageType) {
    const config = this.createConfig(message, messageType);
    this.snackBar.openFromComponent(ToastNotifierComponent, config);

  }

  private createConfig(message: string, messageType: MessageType) {

    let className : string = 'toast-notifier-container';
    className += '-' + messageType;

    const config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    config.panelClass = this.addExtraClass ? [className] : undefined;
    //config.direction = this.dir.value;
    config.data = { message, messageType }
    return config;
  }


/*   setOnTop = () => {
    let elements = document.getElementsByClassName('cdk-global-overlay-wrapper');
    let length = elements.length;
    for (let i = 0; i < length; i++) {
      elements[i].setAttribute('style', 'justify-content: center;align-items: center;');
    }
  } */

}
