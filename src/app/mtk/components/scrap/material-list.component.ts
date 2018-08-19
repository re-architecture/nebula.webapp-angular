import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MTKService } from '../../services/mtk.service';
import { Material } from '../../model/material';

@Component({
  selector: 'app-mtk-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit,OnChanges {

  @Input() formID: number;

  data: Material[] = [];

  displayedColumns: string[] = ['type','code','description','descriptionCN','qty','price','totalValue','note'];

  highlightedRows : any;

  constructor(private mtkService: MTKService) { }

  ngOnInit() {
  
  }

  ngOnChanges() {
    if(this.formID){
      //console.log("change" + this.formID);
      this.getMaterialList();
    }

  }

  getMaterialList(): void {

    //console.log(this.formID);
    this.mtkService.getMaterialByFormID(this.formID)
      .subscribe(data => {
        this.data = data;
        //console.log(this.data);
      });
  }

  getTotalCost() {
    return this.data.map(t => t.totalValue).reduce((acc, value) => acc + value, 0);
  }

}
