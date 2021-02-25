import { Component, OnInit } from '@angular/core';
import * as data from '../../../../../assets/json/pages/home/home.json';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  jsonData: Object = (data as any).default;
  sectionList: Array<Object>;
  attachmentObj: Object;

  ngOnInit(): void {

    console.log("in home")
    this.preparePageData();
  }

  preparePageData(): void {

    this.sectionList = this.jsonData['data'];
    this.attachmentObj = this.jsonData['attachmentData'];

    const keys = Object.keys(this.attachmentObj)
    for (const key of keys) {
      this.attachmentObj[key].path = this._sanitizer.bypassSecurityTrustUrl(this.attachmentObj[key].path);
    }
  }
}
