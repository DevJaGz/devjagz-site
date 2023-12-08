import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { SkillComponent } from './components/skill/skill.component';
import { SKILLS } from '../../constants/skills.constant';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    SkillComponent,
  ],
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {

  @Input()
  titleLabel = '';

  skills = signal(SKILLS);
}
