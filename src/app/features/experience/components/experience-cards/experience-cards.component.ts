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
      colSpan: 2,
    },
    {
      colSpan: 1,
    },
    {
      colSpan: 1,
    },
    {
      rowSpan: 2,
    },
    {
      colSpan: 1,
    },
    {
      colSpan: 1,
    },
    {
      colSpan: 1,
    },
    {
      colSpan: 2,
    },
    {
      colSpan: 1,
    },
  ]
}
