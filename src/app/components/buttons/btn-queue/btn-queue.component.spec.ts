import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnQueueComponent } from './btn-queue.component';

describe('BtnQueueComponent', () => {
  let component: BtnQueueComponent;
  let fixture: ComponentFixture<BtnQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnQueueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
