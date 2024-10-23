import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudInstanceComponent } from './cloud-instance.component';

describe('CloudInstanceComponent', () => {
  let component: CloudInstanceComponent;
  let fixture: ComponentFixture<CloudInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudInstanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
