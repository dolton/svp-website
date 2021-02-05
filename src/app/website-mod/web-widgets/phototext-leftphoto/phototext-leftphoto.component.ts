import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phototext-leftphoto',
  templateUrl: './phototext-leftphoto.component.html',
  styleUrls: ['./phototext-leftphoto.component.css']
})
export class PhototextLeftphotoComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  @Input() section: Object = new Object();
  @Input() attachmentObj: Object;

  ngOnInit(): void {
  }
}
