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
import { FounderComponent } from './website/pages/organization/founder/founder.component';
import { PatronComponent } from './website/pages/organization/patron/patron.component';
import { SpiritSocietyComponent } from './website/pages/organization/spirit-society/spirit-society.component';
import { AggInstitutionComponent } from './website/pages/organization/agg-institution/agg-institution.component';
import { ActivitiesComponent } from './website/pages/activities/activities.component';
import { TwinningComponent } from './website/pages/activities/twinning/twinning.component';
import { ScholarshipComponent } from './website/pages/activities/scholarship/scholarship.component';
import { ProjectsComponent } from './website/pages/activities/projects/projects.component';
import { CouncilsInfoComponent } from './website/pages/councils-info/councils-info.component';
import { CentralCouncilComponent } from './website/pages/councils-info/central-council/central-council.component';
import { AreaCouncilComponent } from './website/pages/councils-info/area-council/area-council.component';
import { ConferencesComponent } from './website/pages/councils-info/conferences/conferences.component';
import { NorthVasaiComponent } from './website/pages/councils-info/conferences/north-vasai/north-vasai.component';
import { SouthVasaiComponent } from './website/pages/councils-info/conferences/south-vasai/south-vasai.component';
import { EastVasaiComponent } from './website/pages/councils-info/conferences/east-vasai/east-vasai.component';
import { MissionVasaiComponent } from './website/pages/councils-info/conferences/mission-vasai/mission-vasai.component';
import { NewsEventsComponent } from './website/pages/news-events/news-events.component';
import { CentralCouncilNewsComponent } from './website/pages/news-events/central-council-news/central-council-news.component';
import { NationalCouncilComponent } from './website/pages/news-events/national-council/national-council.component';
import { InternationalCouncilComponent } from './website/pages/news-events/international-council/international-council.component';
import { ReachoutComponent } from './website/pages/news-events/reachout/reachout.component';
import { CatalogueComponent } from './website/pages/catalogue/catalogue.component';
import { FormsComponent } from './website/pages/catalogue/forms/forms.component';
import { ReportsComponent } from './website/pages/catalogue/reports/reports.component';


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
    AboutUsComponent,
    FounderComponent,
    PatronComponent,
    SpiritSocietyComponent,
    AggInstitutionComponent,
    ActivitiesComponent,
    TwinningComponent,
    ScholarshipComponent,
    ProjectsComponent,
    CouncilsInfoComponent,
    CentralCouncilComponent,
    AreaCouncilComponent,
    ConferencesComponent,
    NorthVasaiComponent,
    SouthVasaiComponent,
    EastVasaiComponent,
    MissionVasaiComponent,
    NewsEventsComponent,
    CentralCouncilNewsComponent,
    NationalCouncilComponent,
    InternationalCouncilComponent,
    ReachoutComponent,
    CatalogueComponent,
    FormsComponent,
    ReportsComponent
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
