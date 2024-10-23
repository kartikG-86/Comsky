import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DropdownComponent } from '../../dropdown/dropdown.component';
import { DataCenterDropdownComponent } from '../../data-center-dropdown/data-center-dropdown.component';

@Component({
  selector: 'app-reserved-ip-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownComponent, DataCenterDropdownComponent],
  templateUrl: './reserved-ip-modal.component.html',
  styleUrl: './reserved-ip-modal.component.css'
})
export class ReservedIpModalComponent implements OnInit {
  ipOptions = [
    { value: 'assign', label: 'Assign to Droplets' },
    { value: 'reserve', label: 'Reserve in a Datacenter Region' }
  ];
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
  isAssign: boolean = true
  constructor(
    private bsModalRef: BsModalRef
  ) { }
  reservedIpForm = new FormGroup({
    setUpIps: new FormControl('assign'),
    searchControl: new FormControl('', [Validators.required]),
    dataCenter: new FormControl(''),
  })
  closeModal() {
    this.bsModalRef.hide()
  }
  ngOnInit(): void {
    this.reservedIpForm.get('setUpIps')?.valueChanges.subscribe((value: any) => {
      if (value === 'assign') {
        this.isAssign = true;  
      } else {
        this.isAssign = false;
      }
    });
  }
  selectedOption(event: any) {
    const option = event.option
   this.reservedIpForm.patchValue({searchControl:option})
  }
  reservedIp() {
  console.log(this.reservedIpForm.value)
  }
}

