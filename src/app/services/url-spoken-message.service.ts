import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class URLSpokenMessageService {
  getMessageBasedOnURLPath(urlPath: string): string {
    switch (urlPath) {
      case '/who-am-i':
        return 'Who am I?';
      case '/experience':
        return 'My experience!';
      case '/resume':
        return 'Download it!';
      case '/contact':
        return 'Let\'s talk!';
      default:
        return '';
    }
  }
}
