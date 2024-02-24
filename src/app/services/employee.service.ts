import { Injectable } from '@angular/core';
import { EmployeeClient, EmployeeGetQuery, EmployeeGetQueryResult, EmployeeValidateLoginCommand } from './Web_Time_Clock_Client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private employeeClient: EmployeeClient) { }

  public EmployeeLogin(employeeId: string, password: string): Observable<string> {
    let command = new EmployeeValidateLoginCommand({
      employeeId: employeeId,
      password: password
    });
    return this.employeeClient.employeeLogin(command);
  }

  public EmployeeGet(employeeId: string): Observable<EmployeeGetQueryResult> {
    let query = new EmployeeGetQuery({
      employeeId: employeeId,
    });
    return this.employeeClient.employeeGet(query);
  }
}
