import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent, ProfilePictureComponent } from '@components';
import { MouseScrollIconComponent } from '../../components/mouse-scroll-icon/mouse-scroll-icon.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    NavMenuComponent,
    ProfilePictureComponent,
    MouseScrollIconComponent,
  ],
  templateUrl: './main-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {

}
