import { Injectable, InjectionToken } from '@angular/core';

export const TOKEN_VALUE = new InjectionToken<string>('tokenValue'); // (10) Definieren eines InjectionTokens

@Injectable()
export class CustomService {
  constructor() {
    console.log('CustomService initialized');
  }

  getCustomMessage(): string {
    return 'Message from CustomService';
  }
}
