import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-documents-listing',
  templateUrl: './documents-listing.component.html',
  styleUrls: ['./documents-listing.component.css']
})
export class DocumentsListingComponent implements OnInit {

  constructor(
  ) { }

  @Input() section: Object = new Object();
  @Input() attachmentObj: Object;

  ngOnInit(): void {
  }

  downloadDocument(_post: Object): void {

    let attData = this.attachmentObj[_post['id']];
    attData = attData.unsanitizedData.split(',')[1];

    if (_post['name'].indexOf('.pdf') > 0) {

      const file = new Blob([attData.trim()], { type: 'application/pdf' });
      let url = window.URL.createObjectURL(file);
      let openWindow = window.open(url);
    }
  }
}
