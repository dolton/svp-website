import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as data from '../../../../../../../assets/json/pages/council-info/south-vac.json';

@Component({
  selector: 'app-south-vasai',
  templateUrl: './south-vasai.component.html',
  styleUrls: ['./south-vasai.component.css']
})
export class SouthVasaiComponent implements OnInit {

  constructor(
    private _sanitizer: DomSanitizer
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
