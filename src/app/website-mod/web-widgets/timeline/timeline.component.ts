import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  @Input() section: Object = new Object();
  @Input() attachmentObj: Object;

  ngOnInit(): void {
  }

}
