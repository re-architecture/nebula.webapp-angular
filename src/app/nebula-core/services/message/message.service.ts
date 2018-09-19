import { Injectable, QueryList } from '@angular/core';
import { MatDialog, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Message } from './message';
import { Subject, Observable } from 'rxjs';
import { DialogComponent } from '../../components/message/dialog.component';
import { NotificationComponent } from '../../components/message/notification.component';
import { ToastComponent } from '../../components/message/toast.component';
import { Alert } from './alert';
import { DialogSizeType } from './dialog';



@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private change = new Subject<Alert>();

  public get changes(): Observable<Alert> {
    return this.change.asObservable();
  }

  constructor(
    private snackBar: MatSnackBar,
    private matDialog: MatDialog) { }

  /**
   * ex.
   * dialogsize = '250px'
   */
  dialog(message: Message, dialogSize?: string, dialogSizeType: DialogSizeType = 'Medium') {

    //width :288px
    //Width: 576px
    //Width: 864px
    //Width: 1152px

    let sizeType: string;

    if (!dialogSize) {
      switch (dialogSizeType) {
        case 'Small': {
          sizeType = '288px';
          break;
        }
        case 'Medium': {
          sizeType = '576px';
          break;
        }
        case 'Large': {
          sizeType = '864px';
          break;
        }
        case 'X-Large': {
          sizeType = '1152px';
          break;
        }
      };
    } else {
      sizeType = dialogSize;
    }
    
    const dialogRef = this.matDialog.open(DialogComponent, {
      width: sizeType,
      data: { message }
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
    });
  }

  notification(message: Message) {

    const config = this.createNotificationConfig(message);
    this.snackBar.openFromComponent(NotificationComponent, config);

  }


  private createNotificationConfig(message: Message) {

    let className: string = 'notification-container';
    className += '-' + message.messageType;

    const config = new MatSnackBarConfig();

    config.verticalPosition = 'top';
    config.horizontalPosition = 'right';
    config.duration = 2000;
    config.panelClass = [className];
    config.data = { message }
    return config;
  }


  toast(message: Message, closable: boolean = true) {

    const config = this.createToastConfig(message, closable);
    this.snackBar.openFromComponent(ToastComponent, config);

  }


  private createToastConfig(message: Message, closeable) {

    let className: string = 'toast-container';
    className += '-' + message.messageType;

    const config = new MatSnackBarConfig();

    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    //config.duration = 2000;
    config.panelClass = [className];
    config.data = { message, closeable }
    return config;
  }

  alert(message: Message, isSizeSmall: boolean = false) {
    this.change.next(new Alert(message, isSizeSmall));
  }

}
