import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavMenuItems } from '@interfaces';
import { IconComponent } from '../icon/icon.component';
@Component({
  selector: 'app-nav-menu-mobile',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './nav-menu-mobile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuMobileComponent {

  readonly menuItems: NavMenuItems = [
    {
      icon: 'SquareRoundedPlus'
    },
    {
      icon: 'UserSquareRounded'
    },
    {
      icon: 'UserSquareRounded'
    },
    {
      icon: 'UserSquareRounded'
    },
    {
      icon: 'UserSquareRounded'
    },
  ]

}
