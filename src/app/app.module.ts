import { NgModule } from '@angular/core';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
