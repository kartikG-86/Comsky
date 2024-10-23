import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupModalComponent } from './backup-modal.component';

describe('BackupModalComponent', () => {
  let component: BackupModalComponent;
  let fixture: ComponentFixture<BackupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackupModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
