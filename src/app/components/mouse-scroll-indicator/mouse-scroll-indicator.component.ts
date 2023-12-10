import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Input,
  OnDestroy,
  Renderer2,
  inject,
  signal,
} from '@angular/core';
import { MouseScrollIconComponent } from '@components';
import { NavigationService } from '@services';
import { skip } from 'rxjs';

@Component({
  selector: 'app-mouse-scroll-indicator',
  standalone: true,
  imports: [CommonModule, MouseScrollIconComponent],
  templateUrl: './mouse-scroll-indicator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MouseScrollIndicatorComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true })
  scrollElement!: HTMLElement;

  private readonly _renderer = inject(Renderer2);
  private readonly _navigationService = inject(NavigationService);
  private readonly _destroyRef = inject(DestroyRef);
  private _scrollChangesListenerDispose!: () => void;

  showMouseScrollIcon = signal(false);

  ngAfterViewInit(): void {
    this._handleScrollChanges();
    this._listenScrollChanges();
    this._listenNavigationChanges();
  }

  ngOnDestroy(): void {
    this._scrollChangesListenerDispose();
  }

  private _listenScrollChanges(): void {
    this._scrollChangesListenerDispose = this._renderer.listen(
      this.scrollElement,
      'scroll',
      (e) => this._handleScrollChanges()
    );
  }

  private _listenNavigationChanges(): void {
    this._navigationService.urlChanges$
      .pipe(takeUntilDestroyed(this._destroyRef), skip(1))
      .subscribe(() => this._handleScrollChanges());
  }

  private _handleScrollChanges(): void {
    // Without setTimeout, the scrollHeight is not updated after navigation ends.
    setTimeout(() => {
      const elementHeight = this.scrollElement.clientHeight;
      const scrollHeight = this.scrollElement.scrollHeight;
      const hasScrollbar = scrollHeight  > elementHeight;
      const isScrollbarOnTop = this.scrollElement.scrollTop === 0;
      this.showMouseScrollIcon.set(hasScrollbar && isScrollbarOnTop);
      console.log('change', this.showMouseScrollIcon());
    }, 0);
  }
}
