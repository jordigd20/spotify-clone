import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPlayComponent } from './btn-play.component';

describe('BtnPlayComponent', () => {
  let component: BtnPlayComponent;
  let fixture: ComponentFixture<BtnPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnPlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
