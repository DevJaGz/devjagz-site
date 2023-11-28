import { Component, OnInit, afterRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  constructor(private _themeService: ThemeService) {
    afterRender(() => {
      this._themeService.handleInitialTheme();
    });
  }
}
