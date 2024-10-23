import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpcModalComponent } from './vpc-modal.component';

describe('VpcModalComponent', () => {
  let component: VpcModalComponent;
  let fixture: ComponentFixture<VpcModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VpcModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VpcModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
