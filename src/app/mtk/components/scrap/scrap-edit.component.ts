import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ScrapForm } from '../../model/scrap-form';
import { MTKService } from '../../services/mtk.service';

@Component({
  selector: 'app-mtk-scrap-edit',
  templateUrl: './scrap-edit.component.html',
  styleUrls: ['./scrap-edit.component.scss']
})
export class ScrapEditComponent implements OnInit {

  scrapForm : ScrapForm;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
          private mtkService : MTKService) { }

  ngOnInit() {
    this.getScrapForm();
  }

  getScrapForm(): void {
    this.mtkService.getScrapFormByID(this.data.id)
    //this.mtkService.getScrapFormByID(41181)
      .subscribe(scrapForm => {
        this.scrapForm = scrapForm
        //console.log(scrapForm);
      });
  }

}
