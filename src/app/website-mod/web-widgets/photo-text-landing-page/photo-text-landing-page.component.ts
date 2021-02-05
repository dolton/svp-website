import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-text-landing-page',
  templateUrl: './photo-text-landing-page.component.html',
  styleUrls: ['./photo-text-landing-page.component.css']
})
export class PhotoTextLandingPageComponent implements OnInit {

  constructor(
  ) { }

  @Input() section: Object = new Object();
  @Input() attachmentObj: Object;

  ngOnInit(): void {
  }
}
