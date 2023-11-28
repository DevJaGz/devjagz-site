import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class BrowserStorageService {

  
  /**
   * Retrieves a value from local storage.
   * If the value does not exist, it returns null.
   * If the value cannot be parsed as JSON, it returns the original string value.
   * @param key - The key of the value to retrieve.
   * @returns An Observable that emits the retrieved value or null.
   */
  getFromLocalStorage<T = unknown>(key: string): Observable<T | null> {
    const value = this._window?.localStorage?.getItem(key);
    if (!value) {
      return of(null);
    }
    try {
      const parsedValue = JSON.parse(value);
      return of(parsedValue);
    }
    catch (error) {
      return of(value as T);
    }
  }

  /**
   * Stores a value in local storage.
   * The value is stringified before being stored.
   * @param key - The key under which to store the value.
   * @param value - The value to store.
   * @returns An Observable that emits the stored value.
   */
  setToLocalStorage<T = unknown>(key: string, value: T): Observable<T | null> {
    const stringifiedValue = JSON.stringify(value);
    this._window?.localStorage?.setItem(key, stringifiedValue);
    return of(value);
  }

  /**
   * Constructor of the BrowserStorageService.
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