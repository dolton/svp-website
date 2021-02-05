import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotetext',
  templateUrl: './quotetext.component.html',
  styleUrls: ['./quotetext.component.css']
})
export class QuotetextComponent implements OnInit {

  constructor() { }

  @Input() section: Object = new Object();
  @Input() attachmentObj: Object;

  ngOnInit(): void {
  }

}
