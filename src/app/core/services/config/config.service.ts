import { Injectable, Optional } from '@angular/core';
import { Config } from './Config';

let nextId = 1;

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    id = nextId++;

    private _userName = 'Sherlock Holmes';

    private _config: Config = {
        appName: 'Nebula Web Application',
        copyright: 're-architecture',
    };

    constructor(@Optional() config: Config) {

        if (config) {
            this._config = config;
        }
    }

    get xxx() {
        // Demo: add a suffix if this service has been created more than once
        const suffix = this.id > 1 ? ` times ${this.id}` : '';
        return this._config.appName + suffix;
    }

    get appConfig() {
        return this._config;
    }

}
