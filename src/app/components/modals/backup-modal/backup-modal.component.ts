import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DropdownComponent } from '../../dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-backup-modal',
  standalone: true,
  imports: [DropdownComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './backup-modal.component.html',
  styleUrl: './backup-modal.component.css'
})
export class BackupModalComponent {
  constructor(private bsModalRef: BsModalRef) { }
  @Input() heading: any
  @Input() html: any
  selectedVM: any
  selectedPlan: any
  displayedPlans: any[] = []
  backupPlans = [
    {
      title: 'Weekly Backups',
      description: 'Each Backup is kept for 4 weeks',
      pricePerMonth: 100,
      discount: '20% of the cost of the Instance',
      image: 'images/weekly_backup.png'
    },
    {
      title: 'Daily Backups',
      description: 'Each backup is kept for 7 days',
      pricePerMonth: 150,
      discount: '30% of the cost of the Instance',
      image: 'images/daily_backup.png'
    }
  ]
  formData = 
    {
      defaultOption: 'Search for an instance',
      list: [{
        options: [{
          title: 'ubuntu-s-1vcpu-1gb-blr1-01',
          description: '1 GB / 25 GB / BLR1',
          id: 'ubuntu-s-1vcpu-1gb-blr1-01'
        }]
      }]
    }

  daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  timeSlots = ["12:00 am - 04:00 am (UTC)", "04:00 am - 08:00 am (UTC)", "08:00 am - 12:00 pm (UTC)", "12:00 pm - 04:00 pm (UTC)", "04:00 pm - 08:00 pm (UTC)", "08:00 pm - 12:00 am (UTC)"]


  backupForm = new FormGroup({
    vm: new FormControl(null, [Validators.required]),
    plan: new FormControl(),
    day: new FormControl('Monday'),
    time: new FormControl("04:00 am - 08:00 am (UTC)", [Validators.required])
  })

  ngOnInit(): void {
    this.selectedPlan = this.backupPlans[0]
    this.displayedPlans.push(this.selectedPlan)
    this.backupForm.patchValue({ plan: this.selectedPlan })

    this.backupForm.controls.plan.valueChanges.subscribe((value: any) => {
      this.selectedPlan = value;
    })

    this.backupForm.valueChanges.subscribe((value: any) => {
      console.log(value)
    })
  }

  selectedOption(e: any) {
    this.selectedVM = e.option
    this.displayedPlans = this.backupPlans
    this.backupForm.patchValue({ plan: this.backupPlans.find((plan: any) => plan.title.includes('Daily')), vm: this.selectedVM })
  }
  closeModal() {
    this.bsModalRef.hide()
  }

  activateBackup() {
    console.log(this.backupForm.value)
  }
}
