import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

    private currentScreenSize!: string;
    private _currentScreenSize$ = new BehaviorSubject('');
    private currentScreenSize$ =  this._currentScreenSize$.asObservable();

    // Create a map to display breakpoint names for demonstration purposes.
    private displayNameMap = new Map([
      [Breakpoints.XSmall, 'XSmall'], //599.9 and less
      [Breakpoints.Small, 'Small'], // 600 to 960
      [Breakpoints.Medium, 'Medium'], // 960 to 1280
      [Breakpoints.Large, 'Large'], // 1280 to 1920
      [Breakpoints.XLarge, 'XLarge'], // 1920 and above
    ]);

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
  ) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
          this._currentScreenSize$.next(this.currentScreenSize)
        }
      }
    });
  }

  getDeviceSize() {
    return this.currentScreenSize;
  }

  getDeviceSize$(): Observable<string> {
    return this.currentScreenSize$;
  }
}
