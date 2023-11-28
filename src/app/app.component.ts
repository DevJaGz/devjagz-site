import { Component, afterNextRender  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '@services';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  constructor(private _themeService: ThemeService) {
    afterNextRender(() => {
      this._themeService.handleInitialTheme();
    });
  }
}
