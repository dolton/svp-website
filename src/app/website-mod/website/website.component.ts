import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
