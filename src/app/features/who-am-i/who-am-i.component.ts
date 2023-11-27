import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileResumeComponent } from './components/profile-resume/profile-resume.component';

@Component({
  selector: 'app-who-am-i',
  standalone: true,
  imports: [
    CommonModule,
    ProfileResumeComponent,
  ],
  templateUrl: './who-am-i.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhoAmIComponent {

}
