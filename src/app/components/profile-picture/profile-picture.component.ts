import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpokenMessageService, NavigationService, URLSpokenMessageService } from '@services';
import { SpokenMessageComponent, NavMenuMobileComponent } from '@components';

@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [CommonModule, SpokenMessageComponent, NavMenuMobileComponent],
  templateUrl: './profile-picture.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePictureComponent implements OnInit {

  private readonly _spokenMessageService = inject(SpokenMessageService);
  private readonly _navigationService = inject(NavigationService);
  private readonly _URLSpokenMessageService= inject(URLSpokenMessageService);

  ngOnInit(): void {
    this._listenRouteChanges();
  }

  private _listenRouteChanges(): void {
    this._navigationService.urlChanges$.subscribe({
      next: (url) => {
        if (url){
          const message = this._URLSpokenMessageService.getMessageBasedOnURLPath(url);
          this._spokenMessageService.showMessage(message, true);
          return;
        }
        this._spokenMessageService.hideMessage();
      }
    })
  } 


}
