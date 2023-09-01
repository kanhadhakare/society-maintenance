import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocityBlockDetailsComponent } from './socity-block-details.component';

describe('SocityBlockDetailsComponent', () => {
  let component: SocityBlockDetailsComponent;
  let fixture: ComponentFixture<SocityBlockDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocityBlockDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocityBlockDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
