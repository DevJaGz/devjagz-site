import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, Renderer2, SimpleChanges, inject } from '@angular/core';
import { ICONS } from '@constants';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: '',
  styles: [`
    :host {
      display: inline-block;
      width: 24px default;
      height: 24px default;
      fill: none default;
      stroke-width: 2px default;
      stroke-linecap: round default;
      stroke-linejoin: round default;
      stroke: currentColor;
    }
  `],
  imports:[],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnChanges, AfterViewInit {  

  @Input({required: true})
  name!: keyof typeof ICONS | undefined;

  private readonly _renderer = inject(Renderer2);
  private readonly _elementRef = inject(ElementRef);
  private readonly _changeDetectorRef = inject(ChangeDetectorRef);

  private  _afterViewInitCompleted = false;
  private _lastSvgElement!: HTMLElement;

  ngOnChanges(changes: SimpleChanges): void {
    if (!this._afterViewInitCompleted) {
      return;
    }
    const { name } = changes;
    const keyIcon = name.currentValue as keyof typeof ICONS;
    if (keyIcon in ICONS) {
      this._createIconElement();
    }
  }

  ngAfterViewInit(): void {
    this._afterViewInitCompleted = true;
    this._createIconElement();
  }

  private _createIconElement(): void {
    if (this._lastSvgElement) {
      this._removeLastSvgElement();
    }

    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(ICONS[this.name as keyof typeof ICONS], 'image/svg+xml');
    const svgElement = svgDoc.documentElement;
    this._renderer.addClass(svgElement, 'app-icon');
    this._renderer.appendChild(this._elementRef.nativeElement, svgDoc.documentElement);
    this._lastSvgElement = svgElement;
    this._changeDetectorRef.markForCheck();
  }

  private _removeLastSvgElement(): void {
    this._renderer.removeChild(this._elementRef.nativeElement, this._lastSvgElement);
  }

}
