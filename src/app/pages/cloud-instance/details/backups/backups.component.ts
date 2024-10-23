import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BackupModalComponent } from '../../../../components/modals/backup-modal/backup-modal.component';
import { CommonModule } from '@angular/common';
import { CommonModalComponent } from '../../../../components/modals/common-modal/common-modal.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-backups',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './backups.component.html',
  styleUrl: './backups.component.css'
})
export class BackupsComponent {
  bsModalRef!: BsModalRef
  constructor(private modalService: BsModalService, private formBuilder: FormBuilder) { }

  instanceDetails: any = {
    name: 'ubuntu-s-1vcpu-1gb-blr1-01',
    specifications: {
      memory: '1 GB',
      disk: '25 GB',
      os: 'Ubuntu',
      version: '24.10 x64',
      ipv4: '143.110.187.202',
      privateIP: '10.122.0.2',

    },
    dataCenter: {
      region: 'Banglore',
      code: 'BLR1'
    },
    isActive: true
  }

  userBackups: any = {
    frequency: 'daily',
    time: {
      start: '12:00 PM',
      end: '4:00 PM',
      timezone: 'UTC'
    }
  }

  deleteBackupForm: FormGroup | undefined;

  ngOnInit(): void {
    this.deleteBackupForm = this.formBuilder.group({
      name: ['', [Validators.required, this.matchStringValidator(this.instanceDetails?.name)]]
    });

    this.deleteBackupForm.valueChanges.subscribe(value => {
      console.log('Form validity:', this.deleteBackupForm?.valid);
    });
  }

  openBackupModal(heading: any) {
    this.bsModalRef = this.modalService.show(BackupModalComponent, {
      class: 'modal-lg',
      backdrop: 'static'
    });
    this.bsModalRef.content.heading = heading
  }


  openDisableModal() {
    this.bsModalRef = this.modalService.show(CommonModalComponent, {
      class: 'modal-lg',
      backdrop: 'static'
    })

    this.bsModalRef.content.heading = "Disable Automated Backups"
    this.bsModalRef.content.description = "Please confirm your intention to disable automated backups by entering the name of the instance below."

    this.bsModalRef.content.htmlCode = `
    <div class="w-100 code py-2 px-4">
       <code class="text-bold">${this.instanceDetails?.name}</code>
    </div>
    `;

    this.bsModalRef.content.formDetails = [{
      title: 'Enter the name of this Instance',
      placeholder: 'Enter the name of this Instance',
      id: 'name',
      type: 'text',
      category: 'input',
      isRequired: true
    }]

    this.bsModalRef.content.form = this.deleteBackupForm
    this.bsModalRef.content.cancelBtn = "Cancel"
    this.bsModalRef.content.confirmBtn = "Disable Automated Backup"

  }



  matchStringValidator(matchString: string) {
    return (control: FormControl) => {
      const isMatch = control.value === matchString;
      return isMatch ? null : { stringMismatch: true };
    };
  }
}
