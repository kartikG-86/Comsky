import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DropdownComponent } from '../../components/dropdown/dropdown.component';
import { VpcModalComponent } from '../../components/modals/vpc-modal/vpc-modal.component';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-vpc',
  standalone: true,
  imports: [CommonModule, RouterLink, DropdownComponent, MatTooltipModule],
  templateUrl: './vpc.component.html',
  styleUrl: './vpc.component.css'
})
export class VpcComponent {
  bsModalRef !: BsModalRef
  isIPCopy: boolean = false
  userInstnceDetails: any = {
    flag_icon: 'images/india-flag.png',
    dataCenterRegion: 'Bangalore',
    dataCenterCode: 'BLR1',
    vpcData: [{
      instanceCode: 'BLR1',
      "IP Range": '10.122.0.0/20',
      "Connections": 0,
      "Resources": 1
    }]
  }

  table_rows = ["Name", "IP Range", "Connections", "Resources", ""]

  docs_info = [
    {
      title: 'Product Docs',
      subTitle: 'VPC Networks Overview',
      description: 'Information on creating and managing Virtual Private Cloud (VPC) Networks',
      link: '/vpc'
    },
    {
      title: 'Tutorials',
      subTitle: 'Gateways and more',
      description: 'Learn how to configure instances as public gateways and perform other tasks related to VPC networks.',
      link: '/vpc'
    },
  ]

  actionBtnsInfo = [
    {
      title: 'Edit Settings'
    },
    {
      title: 'View Members'
    },
    {
      title: 'Gateway Instructions'
    }
  ]

  constructor(private modalService: BsModalService) { }

  openPeerConnectionModal() {
    this.bsModalRef = this.modalService.show(VpcModalComponent, {
      class: 'modal-lg',
      backdrop: 'static'
    })
  }

  copyIP(value: any) {
    this.isIPCopy = true
    navigator?.clipboard.writeText(value)
    setTimeout(() => {
      this.isIPCopy = false
    }, 1000)
  }
}
