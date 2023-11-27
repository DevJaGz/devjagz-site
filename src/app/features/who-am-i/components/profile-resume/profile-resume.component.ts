import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-resume.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileResumeComponent {

}
