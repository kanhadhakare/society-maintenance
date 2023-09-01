import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Overlay, OverlayConfig, OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { OverlayService } from 'src/app/services/overlay.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() color: ThemePalette = 'primary';
  @Input() diameter: number = 100;
  @Input() mode: ProgressSpinnerMode = 'indeterminate';
  @Input() strokeWidth: number = 10;
  @Input() value: number = 0;
  @Input() backdropEnabled = true;
  @Input() positionGloballyCenter = true;
  @Input() isLoading!: boolean;

  @ViewChild('progressSpinnerRef')
  private progressSpinnerRef!: TemplateRef<any>;
  private progressSpinnerOverlayConfig!: OverlayConfig;
  private overlayRef!: OverlayRef;

  constructor(private vcRef: ViewContainerRef, private overlayService: OverlayService) { }

  ngOnInit(): void {

  }

  // ngAfterViewInit(): void {
  //          // Config for Overlay Service
  //          this.progressSpinnerOverlayConfig = {
  //           hasBackdrop: this.backdropEnabled
  //         };
  //         if (this.positionGloballyCenter) {
  //           this.progressSpinnerOverlayConfig['positionStrategy'] = this.overlayService.positionGloballyCenter();
  //         }
  //         // Create Overlay for progress spinner
  //         this.overlayRef = this.overlayService.createOverlay(this.progressSpinnerOverlayConfig);
  // }

  // ngDoCheck() {
  //   // Based on status of displayProgressSpinner attach/detach overlay to progress spinner template
  //   if (this.isLoading && !this.overlayRef?.hasAttached()) {
  //     this.overlayService.attachTemplatePortal(this.overlayRef, this.progressSpinnerRef, this.vcRef);
  //   } else if (!this.isLoading && this.overlayRef?.hasAttached()) {
  //     this.overlayRef.detach();
  //   }
  // }

}
