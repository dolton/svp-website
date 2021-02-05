import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phototext-rightphoto',
  templateUrl: './phototext-rightphoto.component.html',
  styleUrls: ['./phototext-rightphoto.component.css']
})
export class PhototextRightphotoComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  @Input() section: Object = new Object();
  @Input() attachmentObj: Object;

  ngOnInit(): void {
  }
}
