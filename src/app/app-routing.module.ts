import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: './website-mod/website-mod.module.ts#WebsiteModModule',
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes)
