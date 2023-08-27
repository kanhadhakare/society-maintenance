import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';
import { HeaderDataModel, HeaderMenuDataModel, LandingPageHeaderData } from 'src/app/model/headerData.model';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerData: HeaderDataModel = LandingPageHeaderData;

  private destroyed = new Subject<void>();
  public currentScreenSize!: string;
  public sideNavOpen = false;
  public currentUrl!: string;



  constructor(
    private readonly breakpointService: BreakpointService,
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

  private checkBreakPoint(): void {
    this.breakpointService.getDeviceSize$().pipe(
      takeUntil(this.destroyed)
    ).subscribe(deviceBreakpoint => {
      this.currentScreenSize = deviceBreakpoint;
    })
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
