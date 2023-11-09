import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-who-am-i-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div>
      CENTER
    </div>
  `,
})
export class WhoAmIPageComponent {}
