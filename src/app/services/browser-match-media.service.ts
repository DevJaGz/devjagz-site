import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class BrowserMatchMediaService {



  /**
   * Checks if the system color scheme is dark.
   * @returns An Observable that emits true if the system color scheme is dark, false otherwise.
   */
  hasColorSchemeDark(): Observable<boolean> {
    const { _window } = this;
    if (!_window?.matchMedia) {
      return of(false);
    }
    const matchMedia = _window.matchMedia('(prefers-color-scheme: dark)');
    return of(matchMedia.matches);
  }

  /**
   * Constructor of the BrowserMatchMediaService.
   * @param _document - The document object.
   */
  constructor(@Inject(DOCUMENT) private _document: Document) { }

  /**
   * Getter for the window object.
   * @returns The window object if it exists, null otherwise.
   */
  private get _window(): Window | null {
    return this._document.defaultView;
  }
  
}