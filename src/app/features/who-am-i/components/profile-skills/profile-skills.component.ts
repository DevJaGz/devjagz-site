import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SkillsComponent } from '@components';
import { SKILLS, ADDITIONAL_SKILLS } from '@constants';
@Component({
  selector: 'app-profile-skills',
  standalone: true,
  imports: [
    SkillsComponent,
  ],
  templateUrl: './profile-skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileSkillsComponent {
  skills = signal(SKILLS);
  additionalSkills = signal(ADDITIONAL_SKILLS);
}
