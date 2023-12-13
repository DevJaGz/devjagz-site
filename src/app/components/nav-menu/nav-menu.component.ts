import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Renderer2, RendererStyleFlags2, ViewChild, inject, DestroyRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationService } from '@services';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuComponent implements AfterViewInit, OnDestroy {
  @ViewChild('MenuItemsRef', { static: true })
  MenuItemsRef!: ElementRef<HTMLUListElement>

  private readonly _renderer = inject(Renderer2);
  private readonly _navigationService = inject(NavigationService);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _unlistenFns: (() => void)[] = [];

  ngAfterViewInit(): void {
    this._initializeHoverEffect();
    this._listenNavigationChanges();
  }

  ngOnDestroy(): void {
    for(const listener of this._unlistenFns) {
      listener();
    }
  }

  private _initializeHoverEffect(): void {
    const menuItems = this.MenuItemsRef.nativeElement.querySelectorAll('li');
    this._renderer.setStyle(this.MenuItemsRef.nativeElement, '--_transition-hover', `all .3s cubic-bezier(.37,.08,.1,.88)`, RendererStyleFlags2.DashCase);
    menuItems.forEach((item: HTMLLIElement) => {
     const mouseenterUnlistenFn = this._renderer.listen(item, 'mouseenter', this._showHoverHandler.bind(this, item));
     const mouseleaveUnlistenFn = this._renderer.listen(item, 'mouseleave', this._hideHoverHandler.bind(this));
     this._unlistenFns.push(mouseenterUnlistenFn, mouseleaveUnlistenFn);
    });
  }

  private _listenNavigationChanges(): void {
    this._navigationService.navigationEndChanges$
    .pipe(takeUntilDestroyed(this._destroyRef))
    .subscribe({
      next: () => this._hideHoverHandler()
    });
  }

  private _showHoverHandler(item: HTMLLIElement): void {
    const { width, height } = item.getBoundingClientRect();
    const  top = item.offsetTop;
    const  left = item.offsetLeft;
    const aElement = item.querySelector('a');
    if (aElement?.classList.contains('active')) {
      return;
    }
    this._renderer.setStyle(this.MenuItemsRef.nativeElement, '--_opacity-hover', `100%`, RendererStyleFlags2.DashCase);
    this._renderer.setStyle(this.MenuItemsRef.nativeElement, '--_w-hover', `${width}px`, RendererStyleFlags2.DashCase);
    this._renderer.setStyle(this.MenuItemsRef.nativeElement, '--_h-hover', `${height}px`, RendererStyleFlags2.DashCase);
    this._renderer.setStyle(this.MenuItemsRef.nativeElement, '--_top-hover', `${top}px`, RendererStyleFlags2.DashCase);
    this._renderer.setStyle(this.MenuItemsRef.nativeElement, '--_left-hover', `${left}px`, RendererStyleFlags2.DashCase);
  }

  private _hideHoverHandler(): void {
    this._renderer.setStyle(this.MenuItemsRef.nativeElement, '--_opacity-hover', `0%`, RendererStyleFlags2.DashCase);
  }


}
