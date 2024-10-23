import { Component } from '@angular/core';
import { LearnBtnComponent } from '../../../../components/learn-btn/learn-btn.component';
import { DropdownComponent } from '../../../../components/dropdown/dropdown.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-destroy',
  standalone: true,
  imports: [LearnBtnComponent, DropdownComponent, ReactiveFormsModule],
  templateUrl: './destroy.component.html',
  styleUrl: './destroy.component.css'
})
export class DestroyComponent {
  formData =
    {
      defaultOption: 'Search for an instance',
      list: [{
        options: [
          {
            title: 'ubuntu-s-1vcpu-1gb-blr1-01',
            description: '1 GB / 25 GB / BLR1',
            id: 'ubuntu-s-1vcpu-1gb-blr1-01',
            image: 'images/cloud-instance1.png'
          },
          {
            title: 'ubuntu-s-1vcpu-1gb-blr1-02',
            description: '1 GB / 25 GB / BLR1',
            id: 'ubuntu-s-1vcpu-1gb-blr1-02',
            image: 'images/cloud-instance1.png'
          },
          {
            title: 'ubuntu-s-1vcpu-1gb-blr1-03',
            description: '1 GB / 25 GB / BLR1',
            id: 'ubuntu-s-1vcpu-1gb-blr1-03',
            image: 'images/cloud-instance1.png'
          },
        ]
      }]
    }

  rebuildForm = new FormGroup({
    os: new FormControl(null, Validators.required)
  })

  setSelectedOS(e: any) {
    this.rebuildForm.patchValue({ os: e.option })
  }

  destroyInstance() {

  }

}
