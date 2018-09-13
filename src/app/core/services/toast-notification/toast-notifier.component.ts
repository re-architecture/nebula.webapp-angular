import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-core-toast-notifier',
  templateUrl: './toast-notifier.component.html',
  styleUrls: ['./toast-notifier.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToastNotifierComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {


  }

}
