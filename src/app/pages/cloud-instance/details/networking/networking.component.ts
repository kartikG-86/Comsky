import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-networking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './networking.component.html',
  styleUrl: './networking.component.css'
})
export class NetworkingComponent {
  publicNetworkDetails = [
    {
      title: 'Public IPv4 address',
      value: '143.110.187.202'
    },
    {
      title: 'Public gateway',
      value: '143.110.176.1'
    },
    {
      title: 'Subnet mask',
      value: '255.255.240.0'
    },
    {
      title: 'Reserved IP',
      value: '174.138.122.52'
    },
  ]

  privateNetworkDetails: any = {
    ipv4Address: '10.122.0.2',
    vpcDetails: {
      isDefault: true,
      code: 'BLR1'
    },
    ipRange: '10.122.0.0/20'
  }
  isShowCopyIcon: boolean = false;
  copyIconTitle: any;
  isCopied: boolean = false;
  instanceDetails: any;

  showCopyIcon(copyIconTitle: any) {
    if (this.isShowCopyIcon && this.copyIconTitle == copyIconTitle) {
      this.isShowCopyIcon = false
      this.copyIconTitle = null
    }
    else {
      this.isShowCopyIcon = true
      this.copyIconTitle = copyIconTitle
    }
  }

  copyText(title: string) {
    this.isCopied = true;
    navigator?.clipboard.writeText(title);
    setTimeout(() => {
      this.isCopied = false;
      this.isShowCopyIcon = false
      this.copyIconTitle = null
    }, 500);
  }

}
