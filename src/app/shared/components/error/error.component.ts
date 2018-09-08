import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shared-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  title : string;
  errorMessage: string;
  //error403: boolean;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      //if (routeData.error403) {
      //  this.error403 = routeData.error403;
      //}
      if (routeData.errorMessage) {
        this.errorMessage = routeData.errorMessage;
      }
      if(routeData.title){
        this.title = routeData.title;
      }
    });
  }

}
