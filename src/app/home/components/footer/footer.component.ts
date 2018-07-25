import { Component, OnInit } from '@angular/core';
import { appConfig } from 'src/app/config/app.config';

@Component({
  selector: 'app-home-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  companyName : string;
  year : string;

  constructor() { }

  ngOnInit() {
    this.companyName = appConfig.companyName;
    this.year = (new Date()).getFullYear().toString();
  }

}
