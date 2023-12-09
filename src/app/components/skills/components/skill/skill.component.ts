import { ChangeDetectionStrategy, Component, HostListener, Input, inject } from '@angular/core';
import { Skill } from '@interfaces';
import { SpokenMessageService } from '@services';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillComponent {
  private readonly _spokenMessageService = inject(SpokenMessageService);

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

  @HostListener('mouseover')
  onMouseOver(): void {
    this._spokenMessageService.showMessage(this.skillName);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this._spokenMessageService.showLastMessage();
  }
}
