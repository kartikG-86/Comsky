import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadBalancerComponent } from './load-balancer.component';

describe('LoadBalancerComponent', () => {
  let component: LoadBalancerComponent;
  let fixture: ComponentFixture<LoadBalancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadBalancerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadBalancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
