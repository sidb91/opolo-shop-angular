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
import { AppComponent } from './app-components/root/app.component';
import { OpoloGlobalErrorComponent } from './app-components/opolo-global-error/opolo-global-error.component';
import { OpoloServiceFailureComponent } from './app-components/opolo-service-failure/opolo-service-failure.component';
import { OpoloSpinnerComponent } from './app-components/opolo-spinner/opolo-spinner.component';
import { environment } from 'src/environments/environment';

import { CustomSerializer, reducers } from './store/reducers';
import { HttpHeaderInterceptor } from './shared-services/interceptors/http-header.interceptors';
import { effects } from './store/effects';
import { CommonComponentsModule } from './common-components/common-components.module';

@NgModule({
  declarations: [
    AppComponent,
    OpoloGlobalErrorComponent,
    OpoloSpinnerComponent,
    OpoloServiceFailureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonComponentsModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    // EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
