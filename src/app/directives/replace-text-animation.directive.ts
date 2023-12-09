import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
  RendererStyleFlags2,
  afterNextRender,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appReplaceTextAnimation]',
  standalone: true,
})
export class ReplaceTextAnimationDirective implements OnDestroy {
  @Input()
  ignoreAnimation = false;

  private _elementRef = inject(ElementRef);
  private _renderer = inject(Renderer2);
  private _timeout: ReturnType<typeof setTimeout> | undefined;
  private _mutationObserver: MutationObserver | undefined;

  constructor() {
    afterNextRender(() => {
      this._renderer.addClass(this._elementRef.nativeElement, '--replace-text');
      const observer = new MutationObserver((mutationsList) => {
        if (this.ignoreAnimation) {
          console.log('ignore animation');
          return;
        }
        for (const mutation of mutationsList) {
          if (mutation.type === 'characterData') {
            // Text content of the target node has changed.
            if (this._timeout) {
              clearTimeout(this._timeout);
            }
            //number of characters
            const numberOfCharacters = mutation.target.textContent?.length || 0;
            this._renderer.setStyle(
              this._elementRef.nativeElement,
              '--_rta-number-of-characters',
              numberOfCharacters,
              RendererStyleFlags2.DashCase
            );
            this._renderer.addClass(
              this._elementRef.nativeElement,
              '--replace-text-animation'
            );
            this._timeout = setTimeout(() => {
              this._renderer.removeClass(
                this._elementRef.nativeElement,
                '--replace-text-animation'
              );
            }, (numberOfCharacters / 20) * 1000);
          }
          // else if (mutation.type === 'childList') {
          //   // Child nodes have been added or removed
          // }
          // else if (
          //   mutation.type === 'attributes' &&
          //   mutation.attributeName === 'class'
          // ) {
          //   // Class attribute of the target node has changed.
          // }
        }
      });

      // Configuration of the observer:
      const config = {
        // attributes: true,
        // childList: true,
        subtree: true,
        characterData: true,
      };

      // Start observing the target node for configured mutations
      observer.observe(this._elementRef.nativeElement, config);
      this._mutationObserver = observer;
    });
  }

  ngOnDestroy(): void {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
    this._mutationObserver?.disconnect();
  }
}
