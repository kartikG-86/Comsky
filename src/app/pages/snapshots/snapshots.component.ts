import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { timeDifference } from '../../../../timeDifference';
@Component({
  selector: 'app-snapshots',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './snapshots.component.html',
  styleUrl: './snapshots.component.css'
})
export class SnapshotsComponent implements OnInit {
  vmList: any[] = [{
    name: 'ubuntu-s-1vcpu-1gb-blr1-01',
    cpu: 1,
    disk: 25,
    dataCenterCode: 'BLR1'
  }]
  snapshotMoreOptions = [
    {
      title: 'Rename'
    },
    {
      title: 'Create Instance'
    },
    {
      title: 'Add to region'
    },
    {
      title: 'Transfer Snapshot'
    },
    {
      title: 'Restore Instance',
      class: 'border-bottom'
    },
    {
      title: 'Delete',
      class: 'text-danger'
    },
  ]

  activeSnapshotSection: any
  snapshotSections = ["Instances", "Volumes"]
  userSnapshots: any[] = []
  snapshotsRows = ["Name", "Size", "Regions", "Created", ""]
  selectedVm: any
  snapshotForm = new FormGroup({
    vm: new FormControl(null, Validators.required),
    name: new FormControl('', Validators.required)
  });

  constructor() { }
  ngOnInit(): void {
    this.activeSnapshotSection = this.snapshotSections[0]
    const localSnapshots = localStorage.getItem('snapshots')
    if (localSnapshots) {
      this.userSnapshots = JSON.parse(localSnapshots)
    }
  }

  changeVM(vm: any) {
    this.selectedVm = vm
    this.snapshotForm.patchValue({ vm: this.selectedVm, name: this.selectedVm.name + '-29023490' })
  }

  createSnapshot() {
    const snapshot = { name: this.snapshotForm.value.name, dataCenterCode: this.selectedVm?.dataCenterCode, createdAt: new Date() };
    this.userSnapshots.unshift(snapshot)
    this.snapshotForm.reset();
    this.selectedVm = null
    localStorage.setItem('snapshots', JSON.stringify(this.userSnapshots))
  }

  differenceInTime = timeDifference

  changeSection(section: any) {
    this.activeSnapshotSection = section
  }
}
