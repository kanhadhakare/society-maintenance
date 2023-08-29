import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';
import { sidenavData } from 'src/app/mockData/sideNav.mock';
import { HeaderDataModel } from 'src/app/model/headerData.model';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss']
})
export class SuperAdminComponent implements OnInit, OnDestroy {

  private destroyed$ = new Subject<boolean>();

  public navData1 = sidenavData;
  public mode: MatDrawerMode = 'side'
  public currentScreenSize!: string;

  constructor(private breakpointService: BreakpointService) {
    this.breakpointService.getDeviceSize$().pipe(
      takeUntil(this.destroyed$)
    ).subscribe({
      next: (deviceBreakpoint) => {
        this.currentScreenSize = deviceBreakpoint;
        this.mode = deviceBreakpoint === 'small' ? 'over' : 'side';
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroyed$.next(false);
    this.destroyed$.complete();
  }

}
