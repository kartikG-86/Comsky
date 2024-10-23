import { Component } from '@angular/core';
import { LearnBtnComponent } from '../../../../components/learn-btn/learn-btn.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { timeDifference } from '../../../../../../timeDifference';
@Component({
  selector: 'app-snapshots',
  standalone: true,
  imports: [LearnBtnComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './snapshots.component.html',
  styleUrl: './snapshots.component.css'
})
export class SnapshotsComponent {

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

  snapshotForm = new FormGroup({
    name: new FormControl('', Validators.required)
  })

  userSnapshots: any[] = []

  ngOnInit() {
    this.snapshotForm.patchValue({ name: this.instanceDetails?.name + '909037' })
    const localSnapshots = localStorage.getItem('snapshots')
    if (localSnapshots) {
      this.userSnapshots = JSON.parse(localSnapshots)
      console.log(this.userSnapshots)
    }
  }

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
  snapshotsRows = ["Name", "Size", "Regions", "Created", ""]

  createSnapshot() {
    const snapshot = { ...this.snapshotForm.value, dataCenterCode: this.instanceDetails?.dataCenter?.code, createdAt: new Date() };
    this.userSnapshots.unshift(snapshot)
    this.snapshotForm.reset();
    localStorage.setItem('snapshots', JSON.stringify(this.userSnapshots))
  }


  differenceInTime = timeDifference

}
