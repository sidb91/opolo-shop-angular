import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './app-components/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent,
    canActivate: []
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
