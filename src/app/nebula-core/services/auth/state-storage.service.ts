import { Injectable } from '@angular/core';
//import { SessionStorageService } from 'ngx-webstorage';
import { SessionStorageService } from '../session-storage/session-storage.service';

@Injectable({ providedIn: 'root' })
export class StateStorageService {
    constructor(private $sessionStorage: SessionStorageService) {}

    getPreviousState() {
        //return this.$sessionStorage.retrieve('previousState');
        return this.$sessionStorage.getItem('previousState');
    }

    resetPreviousState() {
        //this.$sessionStorage.clear('previousState');
        this.$sessionStorage.removeItem('previousState');
    }

    storePreviousState(previousStateName, previousStateParams) {
        const previousState = { name: previousStateName, params: previousStateParams };
        //this.$sessionStorage.store('previousState', previousState);
        this.$sessionStorage.setItem('previousState', previousState);
    }

    getDestinationState() {
        //return this.$sessionStorage.retrieve('destinationState');
        return this.$sessionStorage.getItem('destinationState');
    }

    storeUrl(url: string) {
        //this.$sessionStorage.store('previousUrl', url);
        this.$sessionStorage.setItem('previousUrl', url);
    }

    getUrl() {
        //return this.$sessionStorage.retrieve('previousUrl');
        return this.$sessionStorage.getItem('previousUrl');
    }

    storeDestinationState(destinationState, destinationStateParams, fromState) {
        const destinationInfo = {
            destination: {
                name: destinationState.name,
                data: destinationState.data
            },
            params: destinationStateParams,
            from: {
                name: fromState.name
            }
        };
        //this.$sessionStorage.store('destinationState', destinationInfo);
        this.$sessionStorage.setItem('destinationState', destinationInfo);
    }
}
