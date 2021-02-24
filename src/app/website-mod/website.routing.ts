import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { WebsiteComponent } from './website/website.component';

export const routes: Routes = [
    { path: '', component: WebsiteComponent }
];

declare module "@angular/core" {
    interface ModuleWithProviders<T = any> {
        ngModule: Type<T>;
        providers?: Provider[];
    }
}
export const WebsiteRouting: ModuleWithProviders = RouterModule.forChild(routes)
