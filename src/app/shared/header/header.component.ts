import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  destroyed = new Subject<void>();
  currentScreenSize!: string;
  sideNavOpen = true;
  currentUrl!: string;

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'], //599.9 and less
    [Breakpoints.Small, 'Small'], // 600 to 960
    [Breakpoints.Medium, 'Medium'], // 960 to 1280
    [Breakpoints.Large, 'Large'], // 1280 to 1920
    [Breakpoints.XLarge, 'XLarge'], // 1920 and above
  ]);

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly router: Router,
    public dialog: MatDialog) {
      this.checkBreakPoint();
      this.router.events.pipe(
        filter(e => e instanceof NavigationEnd),
        takeUntil(this.destroyed)
      ).subscribe((params: any) => {
        console.log(params);
        this.currentUrl = params.url.slice(1)
      });
  }

  ngOnInit(): void {

  }

  @HostListener('document:click', ['$event']) onDocumentClick(event: Event) {
    this.sideNavOpen = false;
  }

  checkBreakPoint(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).pipe(takeUntil(this.destroyed)).subscribe(result => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
        }
      }
    });
  }

  public navigateToPath(path: string): void {
    // event.stopPropagation();
    this.router.navigate([path]);
  }

  openSideNav(event: Event) {
    event.stopPropagation();
    this.sideNavOpen = !this.sideNavOpen;
  }

}
