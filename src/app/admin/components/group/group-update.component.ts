import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { MessageService, Message } from 'src/app/nebula-core';
import { Group } from 'src/app/model';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-admin-group-update',
  templateUrl: './group-update.component.html',
  styleUrls: ['./group-update.component.scss']
})
export class GroupUpdateComponent implements OnInit {

  group: Group;
  isSaving: boolean = false;
  isEdit : boolean;
  
  constructor(private msg: MessageService,
    private dialogRef: MatDialogRef<GroupUpdateComponent>,
    private groupService: GroupService,
    @Inject(MAT_DIALOG_DATA) private dialogData: any
  ) { }

  ngOnInit() {

    if (this.dialogData) {
      this.isEdit = true;
      this.group = this.dialogData.group;
    } else {
      this.isEdit = false;
      this.group = new Group();
    }
  }

  onSubmit() {

    this.isSaving = true;

    if (this.group.id) {
      this.subscribeToSaveResponse(this.groupService.update(this.group));
    } else {
      this.subscribeToSaveResponse(this.groupService.create(this.group));
    }

  }

  private subscribeToSaveResponse(result: Observable<HttpResponse<Group>>) {
    result.subscribe(
      //(res: HttpResponse<Group>) => this.onSaveSuccess(),
      //(res: HttpErrorResponse) => this.onSaveError()

      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  private onSaveSuccess() {
    this.isSaving = false;
    this.dialogRef.close('success');
  }

  private onSaveError() {
    this.isSaving = false;
  }

  /* private onError(errorMessage: string) {

    this.msg.notification(new Message(errorMessage);
  } */

}
