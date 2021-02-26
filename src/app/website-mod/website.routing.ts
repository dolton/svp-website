import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { WebsiteComponent } from './website/website.component';
import { HomeComponent } from './website/pages/home/home.component';
import { AboutUsComponent } from './website/pages/organization/about-us/about-us.component';
import { FounderComponent } from './website/pages/organization/founder/founder.component';
import { PatronComponent } from './website/pages/organization/patron/patron.component';
import { SpiritSocietyComponent } from './website/pages/organization/spirit-society/spirit-society.component';

export const routes: Routes = [
    { path: '', component: WebsiteComponent },
    { path: 'home', component: HomeComponent },
    { path: 'org/about', component: AboutUsComponent },
    { path: 'org/founder', component: FounderComponent },
    { path: 'org/patron', component: PatronComponent },
    { path: 'org/spirit', component: SpiritSocietyComponent }
];

declare module "@angular/core" {
    interface ModuleWithProviders<T = any> {
        ngModule: Type<T>;
        providers?: Provider[];
    }
}
export const WebsiteRouting: ModuleWithProviders = RouterModule.forChild(routes)
