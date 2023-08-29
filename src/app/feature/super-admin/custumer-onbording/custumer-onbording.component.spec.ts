import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumerOnbordingComponent } from './custumer-onbording.component';

describe('CustumerOnbordingComponent', () => {
  let component: CustumerOnbordingComponent;
  let fixture: ComponentFixture<CustumerOnbordingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustumerOnbordingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustumerOnbordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
