import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnMuteComponent } from './btn-mute.component';

describe('BtnMuteComponent', () => {
  let component: BtnMuteComponent;
  let fixture: ComponentFixture<BtnMuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnMuteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnMuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
