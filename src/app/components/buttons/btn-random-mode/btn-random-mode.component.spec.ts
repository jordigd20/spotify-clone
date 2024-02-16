import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRandomModeComponent } from './btn-random-mode.component';

describe('BtnRandomModeComponent', () => {
  let component: BtnRandomModeComponent;
  let fixture: ComponentFixture<BtnRandomModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnRandomModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnRandomModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
