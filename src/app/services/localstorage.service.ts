import { Injectable } from '@angular/core';
import { ENVIRONMENT } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private accessTokenName: string;

  constructor() {
    this.accessTokenName = ENVIRONMENT.browserStorage.accessTokenName;
  }

  public accessJWTGet(): string {
    return this.getItem(this.accessTokenName);
  }

  public accessJWTSet(value: string) {
    this.setItem(this.accessTokenName, value);
    return this.accessJWTGet();
  }

  public accessJWTClear() {
    this.removeItem(this.accessTokenName);
  }

  public getItem(key: string): string {
    let entry: string | null = localStorage.getItem(key);
    return entry ? entry : "";
  }

  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
    return this.getItem(key);
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }

}
