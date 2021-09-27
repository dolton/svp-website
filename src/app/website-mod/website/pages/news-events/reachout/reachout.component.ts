import { Component, OnInit } from '@angular/core';
import * as data from '../../../../../../assets/json/pages/news-events/bulletin.json';
import AOS from 'aos';

@Component({
  selector: 'app-reachout',
  templateUrl: './reachout.component.html',
  styleUrls: ['./reachout.component.css']
})
export class ReachoutComponent implements OnInit {

  constructor() { }

  jsonData: Object = (data as any).default;
  sectionList: Array<Object>;
  attachmentObj: Object;

  ngOnInit(): void {

    this.preparePageData();
    AOS.init();
  }

  preparePageData(): void {

    this.sectionList = this.jsonData['data'];
    this.attachmentObj = this.jsonData['attachmentData'];
  }
}
