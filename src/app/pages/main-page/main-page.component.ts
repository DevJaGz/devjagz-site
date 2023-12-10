import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent, ProfilePictureComponent, MouseScrollIndicatorComponent } from '@components';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    NavMenuComponent,
    ProfilePictureComponent,
    MouseScrollIndicatorComponent,
  ],
  templateUrl: './main-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent  {}
