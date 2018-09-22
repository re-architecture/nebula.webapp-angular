//https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
//https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
import { Injectable } from '@angular/core';

const APP_PREFIX = 'app-';

@Injectable(
  { providedIn: 'root' }
)
export class SessionStorageService {

  constructor() {

  }

  setItem(key: string, value: any) {
    sessionStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
  }

  getItem(key: string) {
    return JSON.parse(sessionStorage.getItem(`${APP_PREFIX}${key}`));
  }

  removeItem(key: string) {
    sessionStorage.removeItem(`${APP_PREFIX}${key}`);
  }

  clear() {
    sessionStorage.clear();
  }

}