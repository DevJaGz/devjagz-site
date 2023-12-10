import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewChild, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent, ProfilePictureComponent, MouseScrollIconComponent } from '@components';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    NavMenuComponent,
    ProfilePictureComponent,
    MouseScrollIconComponent,
  ],
  templateUrl: './main-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements AfterViewInit {
  @ViewChild('scrollElementRef', {static: true}) scrollElementRef!: ElementRef<HTMLElement>;

  get scrollElement(): HTMLElement {
    return this.scrollElementRef.nativeElement;
  }

  private readonly _renderer = inject(Renderer2);
  showMouseScrollIcon = signal(true);

  ngAfterViewInit(): void {
    this._listenScrollChanges();
  }

  private _listenScrollChanges(): void {
    this._renderer.listen(this.scrollElement, 'scroll', () => this._handleScollChanges());
  }

  private _handleScollChanges(): void {
    const hasScrollbar = this.scrollElement.scrollHeight > this.scrollElement.clientHeight;
    const isScrollbarOnTop = this.scrollElement.scrollTop === 0;
    this.showMouseScrollIcon.set(hasScrollbar && isScrollbarOnTop);
  }
}
