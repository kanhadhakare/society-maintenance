import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { BreakpointService } from 'src/app/services/breakpoint.service';
import { SocityBasicDetailsComponent } from '../socity-basic-details/socity-basic-details.component';

@Component({
  selector: 'app-custumer-onbording',
  templateUrl: './custumer-onbording.component.html',
  styleUrls: ['./custumer-onbording.component.scss']
})
export class CustumerOnbordingComponent implements OnInit, OnDestroy, AfterViewInit  {


  private destroyed$ = new Subject();

  public currentScreenSize!: string;
  stepperOrientation!: StepperOrientation;
  public societyBasicDetailsForm!: FormGroup;

  @ViewChild('stepOne') socityBasicDetailsComponent!: SocityBasicDetailsComponent;

  constructor(
    private bpService: BreakpointService
  )
    {
      this.bpService.getDeviceSize$().pipe(
        takeUntil(this.destroyed$)
      ).subscribe({
        next: (deviceBreakpoint) => {
          this.currentScreenSize = deviceBreakpoint;
          this.stepperOrientation = deviceBreakpoint === 'small' ? 'vertical' : 'horizontal';
        }
      })
    }

  ngOnInit(): void {
  }


  ngOnDestroy(): void {
    this.destroyed$.next(false);
    this.destroyed$.complete();
  }

  ngAfterViewInit(): void {
    this.societyBasicDetailsForm = this.socityBasicDetailsComponent.societyBasicDetailsForm;
  }

}
