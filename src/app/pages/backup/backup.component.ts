import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DropdownComponent } from '../../components/dropdown/dropdown.component';
import { BackupModalComponent } from '../../components/modals/backup-modal/backup-modal.component';


@Component({
  selector: 'app-backup',
  standalone: true,
  imports: [CommonModule, DropdownComponent],
  templateUrl: './backup.component.html',
  styleUrl: './backup.component.css'
})
export class BackupComponent {
  bsModalRef!: BsModalRef
  constructor(private modalService: BsModalService) { }


  openBackupModal() {
    this.bsModalRef = this.modalService.show(BackupModalComponent, {
      class: 'modal-lg',
      backdrop: 'static'
    });
    this.bsModalRef.content.heading = "Enable Automated Backups"

  }


}
