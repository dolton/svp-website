import { Component, OnInit } from '@angular/core';
import * as data from '../../../../../../assets/json/pages/news-events/timeline.json';

@Component({
  selector: 'app-events-timeline',
  templateUrl: './events-timeline.component.html',
  styleUrls: ['./events-timeline.component.css']
})
export class EventsTimelineComponent implements OnInit {

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
