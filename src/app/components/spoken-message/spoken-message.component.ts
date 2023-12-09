  import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { SpokenMessageService } from '../../services/spoken-message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spoken-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spoken-message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpokenMessageComponent  {
  private readonly _spokenMessageService = inject(SpokenMessageService);
  private _event = this._spokenMessageService.event;

  constructor(){
    effect(() => {
      console.log('event change', this._event());
    });
  }

  private get eventState(): string {
    return this._event().state;
  }

  get title(): string {
    return this._event().title || '';
  }

  get message(): string {
    return this._event().message || '';
  }

  get templateMessage(): unknown {
    return this._event().templateMessage;
  }

  get isTemplateMessage(): boolean {
    return !!this._event().templateMessage;
  }

  get isShow(): boolean {
    const state = this.eventState;
    return state === 'show' || state === 'show-last';
  }

  get isInitial(): boolean {
    return this.eventState === 'initial';
  } 

}
