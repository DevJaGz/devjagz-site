import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavMenuItems } from '@interfaces';
import { IconComponent } from '../icon/icon.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-nav-menu-mobile',
  standalone: true,
  imports: [IconComponent, RouterLink, RouterLinkActive],
  templateUrl: './nav-menu-mobile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuMobileComponent {

  readonly menuItems: NavMenuItems = [
    {
      icon: 'SquareRoundedPlus',
      onAction: () => console.log('SquareRoundedPlus')
    },
    {
      icon: 'Message2Plus',
      link: '/contact'
    },
    {
      icon: 'Cv',
      link: '/cv'
    },
    {
      icon: 'InfoSquareRounded',
      link: '/experience'
    },
    {
      icon: 'UserSquareRounded',
      link: '/who-am-i'
    }
  ]

}
