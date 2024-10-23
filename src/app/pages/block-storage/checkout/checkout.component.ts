import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  blockStorageForm = new FormGroup({
    plan: new FormControl(),
    vm: new FormControl(),
    configOption: new FormControl(),
    fileSystem: new FormControl(),
    size: new FormControl(),
    storageName: new FormControl('')
  })

  selectedDataCenter: any
  vmList: any[] = [{
    name: 'ubuntu-s-1vcpu-1gb-blr1-01',
    cpu: 1,
    disk: 25,
    dataCenterCode: 'BLR1'
  }]

  configOptions: any[] = [
    {
      title: 'Automatically Format & Mount',
      description: 'We will choose the appropriate default configurations. These settings can be changed later via ssh.',
      type: 'automatic'
    },
    {
      title: 'Manually Format & Mount',
      description: 'We will still attach the volume. You can then manually format and mount the volume.',
      type: 'manual'
    }]

  fileSystems = ["Ext4", "XFS"]
  selectedVm: any
  selectedOption: any
  customizedPlan: any
  enteredSize = 0
  btnValid: boolean = false
  storgagePrice = 300

  volumeSizeData = [

    { pricePerMonth: 830, pricePerHour: 1.245, sizeGB: 100, unit: 'GB' },
    { pricePerMonth: 4150, pricePerHour: 6.142, sizeGB: 500, unit: 'GB' },
    { pricePerMonth: 8300, pricePerHour: 12.367, sizeGB: 1000, unit: 'GB' }
  ]

  constructor() { }
  ngOnInit(): void {

    this.blockStorageForm.valueChanges.subscribe((value: any) => {
      if (value.storageName != '' && value.vm && value.plan) {
        this.btnValid = true
      }
      else {
        this.btnValid = false
      }
    })

    this.blockStorageForm.controls.size.valueChanges.subscribe((value: any) => {

      if (Number(value) > 0) {
        this.enteredSize = Number(value)
        this.blockStorageForm.patchValue({ plan: { pricePerMonth: this.enteredSize * 8.41, pricePerHour: (this.enteredSize * 8.41) / (30 * 24), sizeGB: this.enteredSize, unit: 'GB' } }, { emitEvent: false })
        console.log(this.blockStorageForm.value)
      }
      else {
        this.blockStorageForm.controls.plan.reset()
      }
    })

    this.blockStorageForm.controls.plan.valueChanges.subscribe(() => {
      if (this.enteredSize > 0) {
        this.blockStorageForm.controls.size.reset(null, { emitEvent: false });
        this.enteredSize = 0
      }
    })

    this.blockStorageForm.controls.configOption.valueChanges.subscribe((value: any) => {
      this.selectedOption = value
    })
    this.setInitialValues()
  }

  setInitialValues() {
    this.blockStorageForm.patchValue({ plan: this.volumeSizeData[0], configOption: this.configOptions[0], fileSystem: this.fileSystems[0] })
  }

  changeVM(vm: any) {
    this.selectedVm = vm
    this.blockStorageForm.patchValue({ vm: this.selectedVm })
  }

  onSubmit() {
    if (this.blockStorageForm.valid) {
      console.log(this.blockStorageForm.value)
    }
    else {
      console.log("Invalid form");

    }
  }

}
