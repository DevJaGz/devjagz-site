import {
  Injectable,
  Signal,
  TemplateRef,
  signal,
} from '@angular/core';
import { SpokenMessageEvent } from '@interfaces';
import { INITIAL_SPOKEN_MESSAGE_EVENT } from '@constants';

@Injectable({
  providedIn: 'root',
})
export class SpokenMessageService {
  private _event = signal<SpokenMessageEvent>(INITIAL_SPOKEN_MESSAGE_EVENT);

  private _lastEventRemembered = signal<SpokenMessageEvent>(INITIAL_SPOKEN_MESSAGE_EVENT);

  get event(): Signal<SpokenMessageEvent> {
    return this._event.asReadonly();
  }

  showMessage(message: string | TemplateRef<unknown>, remember = false): void {
    if (typeof message === 'string') {
      this._event.set({
        state: 'show',
        message,
      });
      if (remember){
        this._handleRemember();
      }
      return;
    }
    throw new Error('TemplateRef Not implemented');
  }

  showLastMessage(): void {
    this._event.set({ ...this._lastEventRemembered(), state: 'show-last' })
  }

  hideMessage(): void {
    this._event.update((event) => ({ ...event, state: 'hide' }));
  }

  private _handleRemember(): void {
    this._lastEventRemembered.set(structuredClone(this._event()));
  }
}
