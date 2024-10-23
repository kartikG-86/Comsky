import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DropdownComponent } from "../../dropdown/dropdown.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vpc-modal',
  standalone: true,
  imports: [DropdownComponent, ReactiveFormsModule,CommonModule],
  templateUrl: './vpc-modal.component.html',
  styleUrl: './vpc-modal.component.css'
})
export class VpcModalComponent {
  constructor(private bsModalRef: BsModalRef) { }

  vpcForm = new FormGroup({
    vpc: new FormControl(null, Validators.required),
    peerVPC: new FormControl(null, Validators.required),
    name: new FormControl('asdfads', [Validators.required , Validators.minLength(2)])
  })

  chosenVPC: any
  chosenPeerVPC: any

  vpcNetworks = [
    {
      title: 'default-blr1',
      description: '10.122.0.0/20',
      image: 'images/connection.png',
      id: 'default-blr1'
    },
    {
      title: 'default-vpc-01',
      description: '10.122.16.0/20',
      image: 'images/connection.png',
      id: 'default-vpc-01'
    },
  ]

  vpcNetworkDropdownData = {
    defaultOption: 'Search a VPC',
    list: [{
      options: [
        {
          title: 'default-blr1',
          description: '10.122.0.0/20',
          image: 'images/connection.png',
          id: 'default-blr1'
        },
        {
          title: 'default-vpc-01',
          description: '10.122.16.0/20',
          image: 'images/connection.png',
          id: 'default-vpc-01'
        },
      ]
    }]
  }


  peerToVPCDropdownData: any = {
    defaultOption: 'Search a VPC',
    list: [{
      options: [{
        title: 'default-blr1',
        description: '10.122.0.0/20',
        image: 'images/connection.png',
        id: 'default-blr1'
      },
      {
        title: 'default-vpc-01',
        description: '10.122.16.0/20',
        image: 'images/connection.png',
        id: 'default-vpc-01'
      },]
    }]
  }

  ngOnInit(){
    this.vpcForm.valueChanges.subscribe((value:any) =>{
      console.log(value)
    })
  }

  selectedVPC(e: any) {
    this.chosenVPC = e.option
    this.vpcForm.patchValue({ vpc: this.chosenVPC })
    const restVPC = this.vpcNetworks.filter((vpc: any) => {
      return vpc.id != this.chosenVPC.id
    });
    this.peerToVPCDropdownData.list[0].options = restVPC
  }

  selectedPeerNetwork(e: any) {
    this.chosenPeerVPC = e.option
    this.vpcForm.patchValue({ peerVPC: this.chosenPeerVPC })
  }
  closeModal() {
    this.bsModalRef.hide()
  }
}
