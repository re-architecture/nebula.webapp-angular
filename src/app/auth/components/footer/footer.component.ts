import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/nebula-core';

@Component({
  selector: 'app-auth-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  copyright: string;
  year: string;

  constructor(private configService : ConfigService) { }

  ngOnInit() {
    this.copyright = this.configService.appConfig.copyright;
    this.year = (new Date()).getFullYear().toString();
  }


}
