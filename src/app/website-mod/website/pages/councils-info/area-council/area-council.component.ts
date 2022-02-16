import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as data from '../../../../../../assets/json/pages/council-info/area-council.json';

@Component({
  selector: 'app-area-council',
  templateUrl: './area-council.component.html',
  styleUrls: ['./area-council.component.css']
})
export class AreaCouncilComponent implements OnInit {

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
