import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-who-am-i',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './who-am-i.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhoAmIComponent {

}
