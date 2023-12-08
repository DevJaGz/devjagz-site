import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SkillComponent } from './components/skill/skill.component';
import { Skills } from '@interfaces';

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

  @Input({required: true})
  titleLabel = '';

  @Input({required: true})
  skills: Skills = [];
}
