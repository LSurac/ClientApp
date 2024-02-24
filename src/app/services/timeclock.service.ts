import { Injectable } from '@angular/core';
import { TimeClockClient, TimeClockDto, TimeClockLastGetQuery, TimeClockLastGetQueryResult, TimeClockListGetQuery, TimeClockListGetQueryResult, TimeClockSetCommand, TimeClockSetCommandResult } from './Web_Time_Clock_Client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeclockService {

  constructor(private timeClockClient: TimeClockClient) { }

  public TimeClockLastGet(employeeId: string): Observable<TimeClockLastGetQueryResult> {
    let query = new TimeClockLastGetQuery({
      employeeId: employeeId
    });
    return this.timeClockClient.timeClockLastGet(query);
  }

  public TimeClockListGet(employeeId: string): Observable<TimeClockListGetQueryResult> {
    let query = new TimeClockListGetQuery({
      employeeId: employeeId,
    });
    return this.timeClockClient.timeClockListGet(query);
  } 

  public TimeClockSet(timeClockDto: TimeClockDto): Observable<TimeClockSetCommandResult> {
    let command = new TimeClockSetCommand({
      timeClock: timeClockDto
    });
    return this.timeClockClient.timeClockSet(command);
  } 
}
