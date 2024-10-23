import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCenterDropdownComponent } from './data-center-dropdown.component';

describe('DataCenterDropdownComponent', () => {
  let component: DataCenterDropdownComponent;
  let fixture: ComponentFixture<DataCenterDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataCenterDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataCenterDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
