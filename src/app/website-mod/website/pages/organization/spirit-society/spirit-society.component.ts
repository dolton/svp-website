import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as data from '../../../../../../assets/json/pages/organization/spirit.json';

@Component({
  selector: 'app-spirit-society',
  templateUrl: './spirit-society.component.html',
  styleUrls: ['./spirit-society.component.css']
})
export class SpiritSocietyComponent implements OnInit {

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
