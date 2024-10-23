import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataCenterDropdownComponent } from '../../../components/data-center-dropdown/data-center-dropdown.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-vpc',
  standalone: true,
  imports: [ReactiveFormsModule, DataCenterDropdownComponent, CommonModule , RouterLink],
  templateUrl: './create-vpc.component.html',
  styleUrl: './create-vpc.component.css'
})
export class CreateVpcComponent {
  newVpcForm = new FormGroup({
    ipRange: new FormControl(),
    name: new FormControl('dfdsfa'),
    description: new FormControl(''),
    ipRangePrefix: new FormControl(),
    networkSize: new FormControl(),
    customNetworkSize: new FormControl('')
  })

  selectedIpRange: any
  selectedNetwork: any
  ipRangeData = [
    {
      title: 'Generate an IP range for me',
      isRecommend: true,
      type: 'default'
    },
    {
      title: 'Configure my own IP range',
      description: 'You will need to specify a subnet IP prefix and size',
      type: 'manual'
    }
  ]

  availableAddresses = [
    { prefix: 28, available: '11' },
    { prefix: 24, available: ' 251' },
    { prefix: 20, available: '4091' },
    { prefix: 16, available: '65,531' },
    { prefix: 'Custom', available: null }
  ];

  ngOnInit() {
    this.setInitialValue()

    this.newVpcForm.controls.ipRange.valueChanges.subscribe((value: any) => {
      this.selectedIpRange = value
    })
    this.newVpcForm.controls.networkSize.valueChanges.subscribe((value: any) => {
      this.selectedNetwork = value

      if (value === 'Custom') {
        this.newVpcForm.controls.customNetworkSize.setValidators([
          Validators.required,
          Validators.min(16),
          Validators.max(28)
        ]);
      } else {
        this.newVpcForm.controls.customNetworkSize.clearValidators();
        this.newVpcForm.controls.customNetworkSize.markAsUntouched()
      }
      this.newVpcForm.controls.customNetworkSize.updateValueAndValidity();
    })

    this.selectedIpRange = this.ipRangeData[0]
  }

  setInitialValue() {
    this.newVpcForm.patchValue({ ipRange: this.ipRangeData[0], networkSize: this.availableAddresses[0] })
  }
}
