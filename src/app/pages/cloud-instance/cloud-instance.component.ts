import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cloud-instance',
  standalone: true,
  imports: [CommonModule, RouterLink , MatTooltipModule],
  templateUrl: './cloud-instance.component.html',
  styleUrl: './cloud-instance.component.css'
})
export class CloudInstanceComponent {
  offerPoints = ["We provide a diverse selection of shared and dedicated vCPU cloud instances.", "Easily connect via SSH or use our in-app console.", "Efficiently manage backups, snapshots, and deploy custom images.", "Track performance metrics for optimal management"]
  isIPCopy: boolean = false
  isBackupEnabled:boolean = false
  benefits = [{
    title: 'Easily deploy and manage your Droplets',
    description: 'Interact with your Droplets how you want. Our intuitive UI, CLI, API, and Terraform Provider make it simple to manage your virtual machines.',
    icon: 'images/deployment.png'
  }, {
    title: 'Reliably scale as your demand shifts',
    description: 'Resize a Droplet or scale horizontally with many of them. Deploy across globally distributed data centers with our 99.99% uptime SLA.',
    icon: 'images/reliable.png'
  }, {
    title: 'Build and monitor, and secure your apps for less',
    description: 'Get exceptional bandwidth pricing and 500 GiB per month of outbound data transfer -plus monitoring and firewalls- for free with every Droplet.',
    icon: 'images/secure.png'
  }]


  docs_info = [
    {
      title: 'PRODUCT DOCS',
      subTitle: 'Instances overview',
      description: 'Comprehensive details encompassing every aspect of cloud instances.',
      link: '/cloud-instance'
    },
    {
      title: 'Tutorials',
      subTitle: 'Monitoring your Instances',
      description: 'A conversation on tracking CPU usage in cloud instances.',
      link: '/cloud-instance'
    },
    {
      title: 'EDUCATION',
      subTitle: 'Resource Center',
      description: 'Learn about the resources available for managing your cloud instances.',
      link: '/cloud-instance'
    },
  ]

  userInstances: any[] = [2]
  actionBtnsInfo = [
    {
      title: 'Add a domain'
    },
    {
      title: 'Access console'
    },
    {
      title: 'Resize droplet'
    },
    {
      title: 'Add Block Storage'
    },
    {
      title: 'View usage'
    },
    {
      title: 'Enable backups'
    },
    {
      title: 'Add tags',
    },
    {
      title: 'Destroy',
      class:'text-danger border-top'
    },
  ]

  table_rows = ["Name", "IP Address", "Created", "Tags", "", ""]

  tableData = [{
    name: "ubuntu-s-1vcpu-1gb-blr1-01",
    specifications: {
      memory: "1 GB",
      disk: "25 GB",
      diskType: "SSD",
      region: "BLR1",
      os: "Ubuntu 24.10 x64"
    },
    ipAddress: "143.110.187.202",
    created: 4,
    tags: [],
    image:'images/cloud-instance1.png'
  }]
  copyIP(value: any) {
    this.isIPCopy = true
    navigator?.clipboard.writeText(value)
    setTimeout(() => {
      this.isIPCopy = false
    }, 1000)
  }
}
