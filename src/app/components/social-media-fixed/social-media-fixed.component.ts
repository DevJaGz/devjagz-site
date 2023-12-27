import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-social-media-fixed',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent
  ],
  templateUrl: './social-media-fixed.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialMediaFixedComponent {

}
