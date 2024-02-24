import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { anonymousGuard } from './guards/anonymous.guard';
import { authenticatedGuard } from './guards/authenticated.guard';

const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,

    canLoad: [anonymousGuard],
    canActivate: [
      anonymousGuard
    ],
  },
  {
    path: 'home',
    component: HomeComponent,

    canLoad: [authenticatedGuard],
    canActivate: [],
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      enableTracing: false,
      scrollPositionRestoration: "disabled",
    }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
