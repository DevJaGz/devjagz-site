import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExperienceCardsComponent } from './components/experience-cards/experience-cards.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceCardsComponent],
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {

}
