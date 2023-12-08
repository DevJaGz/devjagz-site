import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillsComponent } from '@components';
@Component({
  selector: 'app-profile-skills',
  standalone: true,
  imports: [
    SkillsComponent,
  ],
  templateUrl: './profile-skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileSkillsComponent {}
