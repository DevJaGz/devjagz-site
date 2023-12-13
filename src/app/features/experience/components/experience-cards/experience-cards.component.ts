import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';

@Component({
  selector: 'app-experience-cards',
  standalone: true,
  imports: [ExperienceCardComponent],
  templateUrl: './experience-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceCardsComponent {
  objs = [
    {
      colSpan2: true,
    },
    {
      colSpan2: false,
    },
    {
      colSpan2: false,
    },
    {
      rowSpan2: true,
    },
    {
      colSpan2: true,
    },
    {
      colSpan2: false,
    },
    {
      colSpan2: true,
    },
    {
      colSpan2: true,
    },
    {
      colSpan2: true,
    },
  ]
}
