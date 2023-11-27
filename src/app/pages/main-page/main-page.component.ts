import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from '../../components/nav-menu/nav-menu.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    NavMenuComponent,
  ],
  templateUrl: './main-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {

}
