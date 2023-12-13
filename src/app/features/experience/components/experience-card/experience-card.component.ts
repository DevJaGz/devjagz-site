import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceCardComponent {
  @Input({required: true})
  index!: number;
}
