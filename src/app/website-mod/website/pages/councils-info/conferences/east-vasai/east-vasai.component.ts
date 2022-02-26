import { Component, OnInit } from '@angular/core';
import * as data from '../../../../../../../assets/json/pages/council-info/east-vac.json';

@Component({
  selector: 'app-east-vasai',
  templateUrl: './east-vasai.component.html',
  styleUrls: ['./east-vasai.component.css']
})
export class EastVasaiComponent implements OnInit {

  constructor(
  ) { }

  jsonData: Object = (data as any).default;
  sectionList: Array<Object>;
  attachmentObj: Object;

  ngOnInit(): void {

    this.preparePageData();
  }

  preparePageData(): void {

    this.sectionList = this.jsonData['data'];
    this.attachmentObj = this.jsonData['attachmentData'];
  }

}
