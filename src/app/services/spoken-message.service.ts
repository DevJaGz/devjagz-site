import { Injectable, Signal, TemplateRef, computed, signal } from '@angular/core';
import { SpokenMessageEvent } from '@interfaces';



@Injectable({
  providedIn: 'root'
})
export class SpokenMessageService {
  private _event = signal<SpokenMessageEvent>({
    state: 'initial'
  });
  private _lastEvent = computed(() => this._event);

  private get _lastEventValue(): SpokenMessageEvent {
    return this._lastEvent()();
  }

  get event(): Signal<SpokenMessageEvent> {
    return this._event.asReadonly();
  }

  showMessage(message: string | TemplateRef<unknown>): void {
    if (typeof message === 'string') {
      this._event.set({ 
        state: 'show',
        message 
      });
      return;
    }
    this._event.set({ 
      state: 'show',
      templateMessage: message 
    });
  }

  showLastMessage(): void {
    this._event.set({
      ...this._lastEventValue,
      state: 'show-last'
    });
  }

  hideMessage(): void {
    this._event.set({
      ...this._lastEventValue,
      state: 'hide'
    });
  }

}
