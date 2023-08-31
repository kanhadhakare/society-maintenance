import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocityBasicDetailsComponent } from './socity-basic-details.component';

describe('SocityBasicDetailsComponent', () => {
  let component: SocityBasicDetailsComponent;
  let fixture: ComponentFixture<SocityBasicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocityBasicDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocityBasicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
