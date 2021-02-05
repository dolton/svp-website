import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photogrid',
  templateUrl: './photogrid.component.html',
  styleUrls: ['./photogrid.component.css']
})
export class PhotogridComponent implements OnInit {

  constructor(
  ) { }

  @Input() section: Object = new Object();
  @Input() attachmentObj: Object;

  ngOnInit(): void {
  }
}
