import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpAuthInterceptor } from './interceptors/http-auth.interceptor';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/localstorage.service';
import { EmployeeService } from './services/employee.service';
import { TimeclockService } from './services/timeclock.service';
import { API_BASE_URL, EmployeeClient, TimeClockClient } from './services/Web_Time_Clock_Client';
import { APP_BASE_HREF } from '@angular/common';
import { ENVIRONMENT } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: (locale: string) => ENVIRONMENT.appBaseHref + "/" + locale + "/",
      deps: [LOCALE_ID]
    },
    { provide: API_BASE_URL, useFactory: () => ENVIRONMENT.apiBaseUrl },

    { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true },

    AuthService,
    LocalStorageService,
    EmployeeService,
    TimeclockService,

    EmployeeClient,
    TimeClockClient,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }