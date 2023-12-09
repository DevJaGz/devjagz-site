import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpokenMessageService } from '@services';
import { SpokenMessageComponent } from '../spoken-message/spoken-message.component';
import { NavigationService } from '@services';
import { URLSpokenMessageService } from '../../services/url-spoken-message.service';

@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [CommonModule, SpokenMessageComponent],
  templateUrl: './profile-picture.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePictureComponent implements OnInit {

  private readonly _spokenMessageService = inject(SpokenMessageService);
  private readonly _navigationService = inject(NavigationService);
  private readonly _URLSpokenMessageService= inject(URLSpokenMessageService);
  private _changeDetectorRef = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this._listenRouteChanges();
  }

  private _listenRouteChanges(): void {
    this._navigationService.urlChanges$.subscribe({
      next: (url) => {
        // if (url){
        //   const message = this._URLSpokenMessageService.getMessageBasedOnURLPath(url);
        //   this._spokenMessageService.showMessage(message);
        //   return;
        // }
        const message = this._URLSpokenMessageService.getMessageBasedOnURLPath(url);
        if (message){
          this._spokenMessageService.showMessage(message);
          return;
        }
        this._spokenMessageService.hideMessage();
      }
    })
  } 


}
