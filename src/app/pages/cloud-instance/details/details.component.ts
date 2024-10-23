import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink, CommonModule, MatTooltipModule, RouterLinkActive, RouterOutlet],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }
  specificRoute: any
  isPowerOff: boolean = false
  copyIconTitle: any
  isShowCopyIcon: boolean = false
  isCopied: boolean = false;

  detailFeatures = [
    { "title": "Graphs", "link": "/graphs" },
    { "title": "Access", "link": "/access" },
    { "title": "Power", "link": "/power" },
    { "title": "Volumes", "link": "/volumes" },
    { "title": "Resize", "link": "/resize" },
    { "title": "Networking", "link": "/networking" },
    { "title": "Backups", "link": "/backups" },
    { "title": "Snapshots", "link": "/snapshots" },
    { "title": "Destroy", "link": "/destroy" },
    { "title": "History", "link": "/history" },
    { "title": "Tags", "link": "/tags" }
  ]
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
  ngOnInit() {

  }

  changePowerStatus() {
    this.isPowerOff = !this.isPowerOff;
    console.log('Power status changed:', this.isPowerOff ? 'OFF' : 'ON');
  }

  showCopyIcon(copyIconTitle: any) {
    if ((this.isShowCopyIcon && this.copyIconTitle == copyIconTitle) || copyIconTitle == null) {
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
    this.copyIconTitle = title;

    navigator?.clipboard.writeText(this.instanceDetails?.specifications[title] || '');

    setTimeout(() => {
      this.isCopied = false;
      this.isShowCopyIcon = false
      this.copyIconTitle = null
    }, 500);
  }

  redirectToPage(link: any) {
    console.log(link)
    // this.router.navigateByUrl(link)
  }
}
