import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  @Input() section: Object = new Object();
  @Input() attachmentObj: Object;

  ngOnInit(): void {
  }
}
