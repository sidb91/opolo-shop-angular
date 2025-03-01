import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageContainer } from './app-containers/landing-page/landing-page.container';
import { PAGES } from './app-services/enum/page-path.enum';
import { OpoloGlobalErrorComponent } from './app-components/opolo-global-error/opolo-global-error.component';

const routes: Routes = [
  {
    path: "",
    component: LandingPageContainer,
    canActivate: []
  },
  {
    path: PAGES.dashboard,
    component: LandingPageContainer,
    canActivate: []
  },
  {
    path: PAGES.pageError,
    component: OpoloGlobalErrorComponent,
    data: { breadcrumb: null}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
