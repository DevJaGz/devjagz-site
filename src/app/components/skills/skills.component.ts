import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SkillComponent } from './components/skill/skill.component';

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
}
