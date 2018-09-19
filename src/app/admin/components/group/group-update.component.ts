//https://github.com/dschnelldavis/angular2-json-schema-form
//https://stackoverflow.com/questions/52260156/angular-6-dynamic-form-generator-with-material-design
//https://stackblitz.com/edit/github-gaztsv?file=src%2Fapp%2Fcomponents%2Fcheckbox%2Fcheckbox.component.ts
//https://medium.com/@mail.bahurudeen/create-a-dynamic-form-with-configurable-fields-and-validations-using-angular-6-994db56834da
//https://github.com/bahurudeen/dynamicform/tree/master/src/

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-group-update',
  templateUrl: './group-update.component.html',
  styleUrls: ['./group-update.component.scss']
})
export class GroupUpdateComponent implements OnInit {

  form: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
