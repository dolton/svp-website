import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textblog',
  templateUrl: './textblog.component.html',
  styleUrls: ['./textblog.component.css']
})
export class TextblogComponent implements OnInit {

  constructor() { }

  section: Object;
  attachmentObj: Object;

  ngOnInit(): void {
  }

}
