import { Location } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class NavigationService {

  private readonly _location = inject(Location);
  private readonly _router = inject(Router);

  get urlChanges$(): Observable<string> {
    return     this._router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((v) => v instanceof NavigationEnd ? v.url : '' ),
      startWith(this._location.path())
      )
  }
  
}