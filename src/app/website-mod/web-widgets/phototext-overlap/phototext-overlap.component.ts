import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phototext-overlap',
  templateUrl: './phototext-overlap.component.html',
  styleUrls: ['./phototext-overlap.component.css']
})
export class PhototextOverlapComponent implements OnInit {

  constructor(
  ) { }

  @Input() section: Object = new Object();
  @Input() attachmentObj: Object;

  ngOnInit(): void {
  }
}
