import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { combineLatest } from 'rxjs';
import { BrowserStorageService, BrowserMatchMediaService } from '@services';
import { ThemeType } from '@enums';

@Injectable({ providedIn: 'root' })
export class ThemeService {


  /**
   * Handles the initial theme of the application.
   * It checks the theme stored in the local storage and the color scheme of the system.
   * If a theme is found in the local storage, it is applied; otherwise, the default theme is applied.
   */
  handleInitialTheme() {
    // Get the theme from local storage
    const themeInStorage$ = this._browserStorageService.getFromLocalStorage<string>('theme');
    // Check if the system color scheme is dark
    const hasColorSchemeDark$ = this._browserMatchMediaService.hasColorSchemeDark();
    // Combine the two observables
    combineLatest([themeInStorage$, hasColorSchemeDark$]).subscribe({
      next: ([themeInStorage, hasColorSchemeDark]) => {
        // Store the system color scheme
        this._hasColorSchemeDark = hasColorSchemeDark;
        // Determine the theme to apply
        const themeType = themeInStorage as ThemeType || this._defaultTheme;
        // Apply the theme
        this._handleTheme(themeType);
        // Save the theme in local storage
        this._saveThemeInStorage(themeType);
      },
      complete: () => {
        console.log('ThemeService.handleTheme() completed');
      }
    });
  }

  /**
   * Sets the theme of the application.
   * @param themeType - The theme to apply.
   */
  setTheme(themeType: ThemeType): void {
    // Apply the theme
    this._handleTheme(themeType);
    // Save the theme in local storage
    this._saveThemeInStorage(themeType);
  }

  /**
   * Constructor of the ThemeService.
   * @param _document - The document object.
   * @param _rendererFactory - The factory to create a renderer.
   * @param _browserStorageService - The service to interact with the browser's storage.
   * @param _browserMatchMediaService - The service to interact with the browser's media queries.
   */
  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _rendererFactory: RendererFactory2,
    private _browserStorageService: BrowserStorageService,
    private _browserMatchMediaService: BrowserMatchMediaService
  ) { }

  // Create a renderer
  private _renderer: Renderer2 = this._rendererFactory.createRenderer(null, null);

  // The default theme
  private _defaultTheme: ThemeType = ThemeType.SYSTEM;

  // Whether the system color scheme is dark
  private _hasColorSchemeDark: boolean = false;

  /**
   * Sets the dark theme.
   */
  private _setDarkTheme(): void {
    // Add the 'dark' class to the body
    this._renderer.addClass(this._document.body, 'dark');
  }

  /**
   * Sets the light theme.
   */
  private _setLightTheme(): void {
    // Remove the 'dark' class from the body
    this._renderer.removeClass(this._document.body, 'dark');
  }

  /**
   * Saves the theme in local storage.
   * @param themeType - The theme to save.
   */
  private _saveThemeInStorage(themeType: ThemeType): void {
    // Save the theme in local storage
    this._browserStorageService.setToLocalStorage('theme', themeType).subscribe();
  }

  /**
   * Handles the theme.
   * If the theme is dark or the system color scheme is dark and the theme is system, the dark theme is set.
   * Otherwise, the light theme is set.
   * @param value - The theme to handle.
   */
  private _handleTheme(value: ThemeType) {
    if (value === ThemeType.DARK || value === ThemeType.SYSTEM && this._hasColorSchemeDark) {
      // Set the dark theme
      this._setDarkTheme();
      return;
    }
    // Set the light theme
    this._setLightTheme();
  }

}