import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { ENVIRONMENT } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public password: string | undefined;
  public employeeId: string | undefined;
  private authService: AuthService;
  private employeeService: EmployeeService;
  private router: Router;

  constructor() {
    this.authService = inject(AuthService);
    this.employeeService = inject(EmployeeService);
    this.router = inject(Router);
  }

  passwordGet(password: string | undefined) {
    this.password = password;
  }

  employeeIdGet(employeeId: string | undefined) {
    this.employeeId = employeeId;
  }
  
  Login() {
    if (!this.employeeId || !this.password) {
      // ErrorHandling irgendwann verbessern
      return;
    }

    this.employeeService.EmployeeLogin(this.employeeId, this.password).pipe(
      take(1),
      tap(async (accessToken) => {
        if (accessToken == undefined) {
          throw new Error("accessToken missing")
        }

        let isLoginSuccessfull = this.authService.isAccessJWTValid(accessToken);
        if (isLoginSuccessfull != true) {
          throw new Error("accessToken invalid")
        }

        await this.authService.accessJWTSet(accessToken)
        .finally(() => this.router.navigate([ENVIRONMENT.authorizedLandingPage.routerlink]));
      })
    ).subscribe();
  }
}
