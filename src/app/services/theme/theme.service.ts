import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable(
  { providedIn: 'root' }
)
export class ThemeService {

  constructor(private localStorageService: LocalStorageService) {

  }

  static storageKey = 'theme-current';

  // Observable string sources
  private themeSource = new Subject<string>();

  // Observable string streams
  theme$ = this.themeSource.asObservable();

  setTheme(theme: string) {
    try {
      //window.localStorage[ThemeService.storageKey] = JSON.stringify(theme);
      this.localStorageService.setItem(ThemeService.storageKey, theme)

    } catch (e) { }
    this.themeSource.next(theme);
  }

  getCurrentTheme(): string {
    try {
      //return JSON.parse(window.localStorage[ThemeService.storageKey] || null);

      return this.localStorageService.getItem(ThemeService.storageKey) || null;
    } catch (e) {
      return null;
    }
  }

  public clearStorageTheme() {
    try {
      //window.localStorage.removeItem(ThemeService.storageKey);
      this.localStorageService.removeItem(ThemeService.storageKey);
    } catch (e) { }
  }

} 