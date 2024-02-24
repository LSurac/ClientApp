import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpAuthInterceptor } from './interceptors/http-auth.interceptor';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/localstorage.service';
import { EmployeeService } from './services/employee.service';
import { TimeclockService } from './services/timeclock.service';
import { EmployeeClient, TimeClockClient } from './services/Web_Time_Clock_Client';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true },

    { provide: AuthService, useExisting: AuthService },
    { provide: LocalStorageService, useExisting: LocalStorageService },
    { provide: EmployeeService, useExisting: EmployeeService },
    { provide: TimeclockService, useExisting: TimeclockService },

    EmployeeClient,
    TimeClockClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }