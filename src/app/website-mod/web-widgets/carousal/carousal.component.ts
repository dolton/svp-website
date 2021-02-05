import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit {

  constructor(
  ) { }

  imageObject: Array<Object> = [];

  @Input() section: Object = new Object();
  @Input() attachmentObj: Object;

  ngOnInit(): void {
    if (this.section['widget'].type.itemValue == 'carousal') {
      this.prepareImageData();
    }
  }

  prepareImageData() {

    if (this.imageObject && this.imageObject.length == 0) {
      this.section['postList'].forEach(post => {
        let imageObj = new Object();
        imageObj['image'] = this.attachmentObj[post.id].path;
        imageObj['thumbImage'] = this.attachmentObj[post.id].path;
        imageObj['alt'] = 'alt of image';
        imageObj['title'] = post.name;

        this.imageObject.push(imageObj);
      });
    }
  }
}
