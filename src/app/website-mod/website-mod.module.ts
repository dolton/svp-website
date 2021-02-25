import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModModule } from '../material-mod/material-mod.module';

import { QuillModule } from 'ngx-quill';
import { NgImageSliderModule } from 'ng-image-slider';

import { WebsiteComponent } from './website/website.component';
import { CarousalComponent } from './web-widgets/carousal/carousal.component';
import { CardsComponent } from './web-widgets/cards/cards.component';
import { PhototextLeftphotoComponent } from './web-widgets/phototext-leftphoto/phototext-leftphoto.component';
import { PhototextRightphotoComponent } from './web-widgets/phototext-rightphoto/phototext-rightphoto.component';
import { PhototextOverlapComponent } from './web-widgets/phototext-overlap/phototext-overlap.component';
import { NoticeComponent } from './web-widgets/notice/notice.component';
import { QuotetextComponent } from './web-widgets/quotetext/quotetext.component';
import { TextblogComponent } from './web-widgets/textblog/textblog.component';
import { PhotogridComponent } from './web-widgets/photogrid/photogrid.component';
import { PhotoTextLandingPageComponent } from './web-widgets/photo-text-landing-page/photo-text-landing-page.component';
import { BlogArticleComponent } from './web-widgets/blog-article/blog-article.component';
import { TimelineComponent } from './web-widgets/timeline/timeline.component';
import { DocumentsListingComponent } from './web-widgets/documents-listing/documents-listing.component';
import { ArticleComponent } from './web-widgets/article/article.component';
import { WebsiteRouting } from './website.routing';
import { HomeComponent } from './website/pages/home/home.component';
import { OrganizationComponent } from './website/pages/organization/organization.component';
import { AboutUsComponent } from './website/pages/organization/about-us/about-us.component';


@NgModule({
  declarations: [
    WebsiteComponent,
    CarousalComponent,
    CardsComponent,
    PhototextLeftphotoComponent,
    PhototextRightphotoComponent,
    PhototextOverlapComponent,
    NoticeComponent,
    QuotetextComponent,
    TextblogComponent,
    PhotogridComponent,
    PhotoTextLandingPageComponent,
    BlogArticleComponent,
    TimelineComponent,
    DocumentsListingComponent,
    ArticleComponent,
    HomeComponent,
    OrganizationComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    MaterialModModule,
    QuillModule.forRoot(),
    NgImageSliderModule,
    WebsiteRouting 
  ]
})
export class WebsiteModModule { }
