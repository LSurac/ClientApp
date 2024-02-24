import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MainComponent } from './components/layout/main/main.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LoginFormularComponent } from './components/widgets/login-formular/login-formular.component';
import { TimeclockFormularComponent } from './components/widgets/timeclock-formular/timeclock-formular.component';
import { TimeclockInfoListComponent } from './components/widgets/timeclock-info/timeclock-info-list/timeclock-info-list.component';
import { TimeclockInfoItemComponent } from './components/widgets/timeclock-info/timeclock-info-item/timeclock-info-item.component';
import { ButtonComponent } from './components/components/button/button.component';
import { InputComponent } from './components/components/input/input.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpAuthInterceptor } from './interceptors/http-auth.interceptor';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/localstorage.service';
import { EmployeeService } from './services/employee.service';
import { TimeclockService } from './services/timeclock.service';
import { EmployeeClient, TimeClockClient } from './services/Web_Time_Clock_Client';
import { EMPTY, Observable, catchError, tap } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormularComponent,
    TimeclockFormularComponent,
    TimeclockInfoListComponent,
    TimeclockInfoItemComponent,
    ButtonComponent,
    InputComponent
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

    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [EmployeeService, AuthService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function initializeAppFactory(
  employeeService: EmployeeService,
  authService: AuthService): () => Observable<unknown> {
  return () => {
    return employeeService.EmployeeLogin()
      .pipe(
        tap((token: string) => {
          let isLoginSuccessfull = authService.isAccessJWTValid(token);
          if (isLoginSuccessfull != true) {
            throw new Error("Login failed. JWT validation failed.");
          }

          authService.accessJWTSet(token);
        })
        ,
        catchError((err: any, caught: Observable<string>) => {
          return EMPTY;
        })
      );
  };
}