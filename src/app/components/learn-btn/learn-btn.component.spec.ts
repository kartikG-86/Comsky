import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnBtnComponent } from './learn-btn.component';

describe('LearnBtnComponent', () => {
  let component: LearnBtnComponent;
  let fixture: ComponentFixture<LearnBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
