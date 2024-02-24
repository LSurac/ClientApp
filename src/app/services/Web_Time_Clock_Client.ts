//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.0.3.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class EmployeeClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ?? "";
    }

    employeeGet(employeeGetQuery: EmployeeGetQuery): Observable<EmployeeGetQueryResult> {
        let url_ = this.baseUrl + "/api/Employee/EmployeeGet";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(employeeGetQuery);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processEmployeeGet(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processEmployeeGet(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<EmployeeGetQueryResult>;
                }
            } else
                return _observableThrow(response_) as any as Observable<EmployeeGetQueryResult>;
        }));
    }

    protected processEmployeeGet(response: HttpResponseBase): Observable<EmployeeGetQueryResult> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = EmployeeGetQueryResult.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    employeeLogin(employeeLoginCommand: EmployeeValidateLoginCommand): Observable<string> {
        let url_ = this.baseUrl + "/api/Employee/EmployeeLogin";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(employeeLoginCommand);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processEmployeeLogin(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processEmployeeLogin(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<string>;
                }
            } else
                return _observableThrow(response_) as any as Observable<string>;
        }));
    }

    protected processEmployeeLogin(response: HttpResponseBase): Observable<string> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}

@Injectable()
export class TimeClockClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ?? "";
    }

    timeClockLastGet(timeClockLastGetQuery: TimeClockLastGetQuery): Observable<TimeClockLastGetQueryResult> {
        let url_ = this.baseUrl + "/api/TimeClock/TimeClockLastGet";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(timeClockLastGetQuery);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processTimeClockLastGet(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processTimeClockLastGet(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<TimeClockLastGetQueryResult>;
                }
            } else
                return _observableThrow(response_) as any as Observable<TimeClockLastGetQueryResult>;
        }));
    }

    protected processTimeClockLastGet(response: HttpResponseBase): Observable<TimeClockLastGetQueryResult> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = TimeClockLastGetQueryResult.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    timeClockListGet(timeClockListGetQueryResult: TimeClockListGetQuery): Observable<TimeClockListGetQueryResult> {
        let url_ = this.baseUrl + "/api/TimeClock/TimeClockListGet";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(timeClockListGetQueryResult);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processTimeClockListGet(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processTimeClockListGet(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<TimeClockListGetQueryResult>;
                }
            } else
                return _observableThrow(response_) as any as Observable<TimeClockListGetQueryResult>;
        }));
    }

    protected processTimeClockListGet(response: HttpResponseBase): Observable<TimeClockListGetQueryResult> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = TimeClockListGetQueryResult.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    timeClockSet(timeClockSetCommand: TimeClockSetCommand): Observable<TimeClockSetCommandResult> {
        let url_ = this.baseUrl + "/api/TimeClock/TimeClockSet";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(timeClockSetCommand);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processTimeClockSet(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processTimeClockSet(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<TimeClockSetCommandResult>;
                }
            } else
                return _observableThrow(response_) as any as Observable<TimeClockSetCommandResult>;
        }));
    }

    protected processTimeClockSet(response: HttpResponseBase): Observable<TimeClockSetCommandResult> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = TimeClockSetCommandResult.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}

export class EmployeeGetQueryResult implements IEmployeeGetQueryResult {
    employee!: EmployeeDto;

    constructor(data?: IEmployeeGetQueryResult) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.employee = new EmployeeDto();
        }
    }

    init(_data?: any) {
        if (_data) {
            this.employee = _data["employee"] ? EmployeeDto.fromJS(_data["employee"]) : new EmployeeDto();
        }
    }

    static fromJS(data: any): EmployeeGetQueryResult {
        data = typeof data === 'object' ? data : {};
        let result = new EmployeeGetQueryResult();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["employee"] = this.employee ? this.employee.toJSON() : <any>undefined;
        return data;
    }
}

export interface IEmployeeGetQueryResult {
    employee: EmployeeDto;
}

export class EmployeeDto implements IEmployeeDto {
    id!: number;
    forName?: string | undefined;
    lastName?: string | undefined;
    gender!: EGender;
    dateOfBirth!: Date;
    email?: string | undefined;
    phoneNumber?: string | undefined;
    addressId!: number;
    hireDate!: Date;
    departmentId!: number;

    constructor(data?: IEmployeeDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.forName = _data["forName"];
            this.lastName = _data["lastName"];
            this.gender = _data["gender"];
            this.dateOfBirth = _data["dateOfBirth"] ? new Date(_data["dateOfBirth"].toString()) : <any>undefined;
            this.email = _data["email"];
            this.phoneNumber = _data["phoneNumber"];
            this.addressId = _data["addressId"];
            this.hireDate = _data["hireDate"] ? new Date(_data["hireDate"].toString()) : <any>undefined;
            this.departmentId = _data["departmentId"];
        }
    }

    static fromJS(data: any): EmployeeDto {
        data = typeof data === 'object' ? data : {};
        let result = new EmployeeDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["forName"] = this.forName;
        data["lastName"] = this.lastName;
        data["gender"] = this.gender;
        data["dateOfBirth"] = this.dateOfBirth ? formatDate(this.dateOfBirth) : <any>undefined;
        data["email"] = this.email;
        data["phoneNumber"] = this.phoneNumber;
        data["addressId"] = this.addressId;
        data["hireDate"] = this.hireDate ? formatDate(this.hireDate) : <any>undefined;
        data["departmentId"] = this.departmentId;
        return data;
    }
}

export interface IEmployeeDto {
    id: number;
    forName?: string | undefined;
    lastName?: string | undefined;
    gender: EGender;
    dateOfBirth: Date;
    email?: string | undefined;
    phoneNumber?: string | undefined;
    addressId: number;
    hireDate: Date;
    departmentId: number;
}

export enum EGender {
    Female = 0,
    Male = 1,
    Divers = 2,
}

export class EmployeeGetQuery implements IEmployeeGetQuery {
    employeeId!: string;

    constructor(data?: IEmployeeGetQuery) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.employeeId = _data["employeeId"];
        }
    }

    static fromJS(data: any): EmployeeGetQuery {
        data = typeof data === 'object' ? data : {};
        let result = new EmployeeGetQuery();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["employeeId"] = this.employeeId;
        return data;
    }
}

export interface IEmployeeGetQuery {
    employeeId: string;
}

export class EmployeeValidateLoginCommand implements IEmployeeValidateLoginCommand {
    employeeId!: string;
    password!: string;

    constructor(data?: IEmployeeValidateLoginCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.employeeId = _data["employeeId"];
            this.password = _data["password"];
        }
    }

    static fromJS(data: any): EmployeeValidateLoginCommand {
        data = typeof data === 'object' ? data : {};
        let result = new EmployeeValidateLoginCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["employeeId"] = this.employeeId;
        data["password"] = this.password;
        return data;
    }
}

export interface IEmployeeValidateLoginCommand {
    employeeId: string;
    password: string;
}

export class TimeClockLastGetQueryResult implements ITimeClockLastGetQueryResult {
    timeClock!: TimeClockDto;

    constructor(data?: ITimeClockLastGetQueryResult) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.timeClock = new TimeClockDto();
        }
    }

    init(_data?: any) {
        if (_data) {
            this.timeClock = _data["timeClock"] ? TimeClockDto.fromJS(_data["timeClock"]) : new TimeClockDto();
        }
    }

    static fromJS(data: any): TimeClockLastGetQueryResult {
        data = typeof data === 'object' ? data : {};
        let result = new TimeClockLastGetQueryResult();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["timeClock"] = this.timeClock ? this.timeClock.toJSON() : <any>undefined;
        return data;
    }
}

export interface ITimeClockLastGetQueryResult {
    timeClock: TimeClockDto;
}

export class TimeClockDto implements ITimeClockDto {
    id!: number;
    employeeId!: number;
    utcTime!: Date;
    action!: ETimeClockAction;

    constructor(data?: ITimeClockDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.employeeId = _data["employeeId"];
            this.utcTime = _data["utcTime"] ? new Date(_data["utcTime"].toString()) : <any>undefined;
            this.action = _data["action"];
        }
    }

    static fromJS(data: any): TimeClockDto {
        data = typeof data === 'object' ? data : {};
        let result = new TimeClockDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["employeeId"] = this.employeeId;
        data["utcTime"] = this.utcTime ? this.utcTime.toISOString() : <any>undefined;
        data["action"] = this.action;
        return data;
    }
}

export interface ITimeClockDto {
    id: number;
    employeeId: number;
    utcTime: Date;
    action: ETimeClockAction;
}

export enum ETimeClockAction {
    CheckIn = 0,
    CheckOut = 1,
}

export class TimeClockLastGetQuery implements ITimeClockLastGetQuery {
    employeeId!: string;

    constructor(data?: ITimeClockLastGetQuery) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.employeeId = _data["employeeId"];
        }
    }

    static fromJS(data: any): TimeClockLastGetQuery {
        data = typeof data === 'object' ? data : {};
        let result = new TimeClockLastGetQuery();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["employeeId"] = this.employeeId;
        return data;
    }
}

export interface ITimeClockLastGetQuery {
    employeeId: string;
}

export class TimeClockListGetQueryResult implements ITimeClockListGetQueryResult {
    timeClockList!: TimeClockDto[];

    constructor(data?: ITimeClockListGetQueryResult) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.timeClockList = [];
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["timeClockList"])) {
                this.timeClockList = [] as any;
                for (let item of _data["timeClockList"])
                    this.timeClockList!.push(TimeClockDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): TimeClockListGetQueryResult {
        data = typeof data === 'object' ? data : {};
        let result = new TimeClockListGetQueryResult();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.timeClockList)) {
            data["timeClockList"] = [];
            for (let item of this.timeClockList)
                data["timeClockList"].push(item.toJSON());
        }
        return data;
    }
}

export interface ITimeClockListGetQueryResult {
    timeClockList: TimeClockDto[];
}

export class TimeClockListGetQuery implements ITimeClockListGetQuery {
    employeeId!: string;
    startDate?: Date | undefined;
    endDate?: Date | undefined;

    constructor(data?: ITimeClockListGetQuery) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.employeeId = _data["employeeId"];
            this.startDate = _data["startDate"] ? new Date(_data["startDate"].toString()) : <any>undefined;
            this.endDate = _data["endDate"] ? new Date(_data["endDate"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): TimeClockListGetQuery {
        data = typeof data === 'object' ? data : {};
        let result = new TimeClockListGetQuery();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["employeeId"] = this.employeeId;
        data["startDate"] = this.startDate ? formatDate(this.startDate) : <any>undefined;
        data["endDate"] = this.endDate ? formatDate(this.endDate) : <any>undefined;
        return data;
    }
}

export interface ITimeClockListGetQuery {
    employeeId: string;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
}

export class TimeClockSetCommandResult implements ITimeClockSetCommandResult {

    constructor(data?: ITimeClockSetCommandResult) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
    }

    static fromJS(data: any): TimeClockSetCommandResult {
        data = typeof data === 'object' ? data : {};
        let result = new TimeClockSetCommandResult();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        return data;
    }
}

export interface ITimeClockSetCommandResult {
}

export class TimeClockSetCommand implements ITimeClockSetCommand {
    timeClock!: TimeClockDto;

    constructor(data?: ITimeClockSetCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.timeClock = new TimeClockDto();
        }
    }

    init(_data?: any) {
        if (_data) {
            this.timeClock = _data["timeClock"] ? TimeClockDto.fromJS(_data["timeClock"]) : new TimeClockDto();
        }
    }

    static fromJS(data: any): TimeClockSetCommand {
        data = typeof data === 'object' ? data : {};
        let result = new TimeClockSetCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["timeClock"] = this.timeClock ? this.timeClock.toJSON() : <any>undefined;
        return data;
    }
}

export interface ITimeClockSetCommand {
    timeClock: TimeClockDto;
}

function formatDate(d: Date) {
    return d.getFullYear() + '-' + 
        (d.getMonth() < 9 ? ('0' + (d.getMonth()+1)) : (d.getMonth()+1)) + '-' +
        (d.getDate() < 10 ? ('0' + d.getDate()) : d.getDate());
}

export class SwaggerException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    return _observableThrow(new SwaggerException(message, status, response, headers, result));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}