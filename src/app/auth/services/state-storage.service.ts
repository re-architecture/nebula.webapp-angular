import { Injectable } from '@angular/core';
import { SessionStorageService } from 'src/app/services';
//import { SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class StateStorageService {
  constructor(private $sessionStorage: SessionStorageService) {}

  getPreviousState() {
    return this.$sessionStorage.getItem('previousState');
  }

  resetPreviousState() {
    this.$sessionStorage.removeItem('previousState');
  }

  storePreviousState(previousStateName, previousStateParams) {
    const previousState = { name: previousStateName, params: previousStateParams };
    this.$sessionStorage.setItem('previousState', previousState);
  }

  getDestinationState() {
    return this.$sessionStorage.getItem('destinationState');
  }

  storeUrl(url: string) {
    this.$sessionStorage.setItem('previousUrl', url);
  }

  getUrl() {
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
    this.$sessionStorage.setItem('destinationState', destinationInfo);
  }
}
