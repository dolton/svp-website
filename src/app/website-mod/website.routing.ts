import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { WebsiteComponent } from './website/website.component';
import { HomeComponent } from './website/pages/home/home.component';
import { AboutUsComponent } from './website/pages/organization/about-us/about-us.component';
import { FounderComponent } from './website/pages/organization/founder/founder.component';
import { PatronComponent } from './website/pages/organization/patron/patron.component';
import { SpiritSocietyComponent } from './website/pages/organization/spirit-society/spirit-society.component';
import { TwinningComponent } from './website/pages/activities/twinning/twinning.component';
import { ScholarshipComponent } from './website/pages/activities/scholarship/scholarship.component';
import { ProjectsComponent } from './website/pages/activities/projects/projects.component';
import { CentralCouncilComponent } from './website/pages/councils-info/central-council/central-council.component';
import { AreaCouncilComponent } from './website/pages/councils-info/area-council/area-council.component';
import { NorthVasaiComponent } from './website/pages/councils-info/conferences/north-vasai/north-vasai.component';
import { SouthVasaiComponent } from './website/pages/councils-info/conferences/south-vasai/south-vasai.component';
import { EastVasaiComponent } from './website/pages/councils-info/conferences/east-vasai/east-vasai.component';
import { MissionVasaiComponent } from './website/pages/councils-info/conferences/mission-vasai/mission-vasai.component';
import { NewsEventsComponent } from './website/pages/news-events/news-events.component';
import { CentralCouncilNewsComponent } from './website/pages/news-events/central-council-news/central-council-news.component';
import { NationalCouncilComponent } from './website/pages/news-events/national-council/national-council.component';
import { InternationalCouncilComponent } from './website/pages/news-events/international-council/international-council.component';
import { ReachoutComponent } from './website/pages/news-events/reachout/reachout.component';
import { FormsComponent } from './website/pages/catalogue/forms/forms.component';
import { ReportsComponent } from './website/pages/catalogue/reports/reports.component';
import { GetInvolvedComponent } from './website/pages/organization/get-involved/get-involved.component';

export const routes: Routes = [
    { path: '', component: WebsiteComponent },
    { path: 'home', component: HomeComponent },
    { path: 'org/about', component: AboutUsComponent },
    { path: 'org/founder', component: FounderComponent },
    { path: 'org/patron', component: PatronComponent },
    { path: 'org/spirit', component: SpiritSocietyComponent },
    { path: 'org/get-involved', component: GetInvolvedComponent },
    { path: 'act/twinning', component: TwinningComponent },
    { path: 'act/scholarship', component: ScholarshipComponent },
    { path: 'act/projects', component: ProjectsComponent },
    { path: 'council/central', component: CentralCouncilComponent },
    { path: 'council/area', component: AreaCouncilComponent },
    { path: 'council/conf/north', component: NorthVasaiComponent },
    { path: 'council/conf/south', component: SouthVasaiComponent },
    { path: 'council/conf/east', component: EastVasaiComponent },
    { path: 'council/conf/mission', component: MissionVasaiComponent },
    { path: 'news/central', component: CentralCouncilNewsComponent },
    { path: 'news/national', component: NationalCouncilComponent },
    { path: 'news/international', component: InternationalCouncilComponent },
    { path: 'news/reachout', component: ReachoutComponent },
    { path: 'catalogue/forms', component: FormsComponent },
    { path: 'catalogue/reports', component: ReportsComponent }
];

declare module "@angular/core" {
    interface ModuleWithProviders<T = any> {
        ngModule: Type<T>;
        providers?: Provider[];
    }
}
export const WebsiteRouting: ModuleWithProviders = RouterModule.forChild(routes)
