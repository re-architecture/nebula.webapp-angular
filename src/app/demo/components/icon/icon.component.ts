//Ref:
//https://github.com/angular/material2/blob/master/src/demo-app/icon/icon-demo.ts

import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'demo-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor(
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer) {

     /*  this.iconRegistry
        .addSvgIconSetInNamespace('core',
            sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icon/icon-svg-sprite.svg')) */

    }

  ngOnInit() {
  }

}
