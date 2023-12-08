import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Skill } from '@interfaces';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillComponent {

  @Input({ required: true })
  skill!: Skill;

  get skillName(): string {
    return this.skill.label;
  }

  get skillImage(): string {
    return this.skill.image;
  }

  get skillLink(): string {
    return this.skill.link;
  }

  get skillClass(): string {
    return this.skill.class;
  }

}
