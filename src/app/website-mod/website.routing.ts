import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { WebsiteComponent } from './website/website.component';
import { HomeComponent } from './website/pages/home/home.component';
import { AboutUsComponent } from './website/pages/organization/about-us/about-us.component';
import { FounderComponent } from './website/pages/organization/founder/founder.component';

export const routes: Routes = [
    { path: '', component: WebsiteComponent },
    { path: 'home', component: HomeComponent },
    { path: 'org/about', component: AboutUsComponent },
    { path: 'org/founder', component: FounderComponent }
];

declare module "@angular/core" {
    interface ModuleWithProviders<T = any> {
        ngModule: Type<T>;
        providers?: Provider[];
    }
}
export const WebsiteRouting: ModuleWithProviders = RouterModule.forChild(routes)
