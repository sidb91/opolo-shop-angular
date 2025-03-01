import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  RouterStateSerializer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { CommonComponentsModule } from './common-components/common-components.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app-components/root/app.component';
import { OpoloGlobalErrorComponent } from './app-components/opolo-global-error/opolo-global-error.component';
import { OpoloServiceFailureComponent } from './app-components/opolo-service-failure/opolo-service-failure.component';
import { OpoloSpinnerComponent } from './app-components/opolo-spinner/opolo-spinner.component';

import { environment } from 'src/environments/environment';

import { CustomSerializer, reducers } from './store/reducers';
import { effects } from './store/effects';
import { reducer } from './application/store/reducers/workspace-details.reducer';

import { HttpHeaderInterceptor } from './shared-services/interceptors/http-header.interceptors';
import { FeatureModuleNames } from './app-services/enum/feature-names.enum';

import { LandingPageContainer } from './app-containers/landing-page/landing-page.container';

@NgModule({
  declarations: [
    AppComponent,
    OpoloGlobalErrorComponent,
    OpoloSpinnerComponent,
    OpoloServiceFailureComponent,
    LandingPageContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonComponentsModule,
    AuthModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      name: "App Devtools",
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot(effects),
    StoreModule.forFeature(FeatureModuleNames.applications, reducer),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
