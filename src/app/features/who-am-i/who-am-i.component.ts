import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileResumeComponent } from './components/profile-resume/profile-resume.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ProfileSkillsComponent } from './components/profile-skills/profile-skills.component';

@Component({
  selector: 'app-who-am-i',
  standalone: true,
  imports: [
    CommonModule,
    ProfileResumeComponent,
    ProfileSkillsComponent,
  ],
  templateUrl: './who-am-i.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhoAmIComponent {

}
