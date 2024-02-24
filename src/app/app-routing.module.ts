import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AnonymousGuard } from './guards/anonymous.guard';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { LoginComponent } from './components/pages/login/login.component';
import { LoginModule } from './components/pages/login/login.module';

const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,

    canLoad: [AnonymousGuard],
    canActivate: [
      AnonymousGuard
    ],
  },
  {
    path: 'home',
    component: HomeComponent,

    canLoad: [AuthenticatedGuard],
    canActivate: [
      AuthenticatedGuard
    ],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      enableTracing: false,
      scrollPositionRestoration: "disabled",
    }),

    LoginModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
