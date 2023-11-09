import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div>
      <h1>Hello, devjagz-portfolio</h1>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class MainPageComponent {}
