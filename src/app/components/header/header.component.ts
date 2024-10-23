import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToggleService } from '../../core/services/toggle.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @Input() headerUsedComponent = 'Login'
  isSidebarToggle: any
  constructor(private toggleService: ToggleService) { }

  createData = [
    {
      title: "Cloud Instance",
      link: '/cloud-instance/checkout'
    },
    {
      title: "Kuberenetes",
      link: '/kubernetes/checkout'
    },
    {
      title: "Object Storage",
      link: '/object-storage/checkout'
    },
    {
      title: "Block Storage",
      link: '/block-storage/checkout'
    },
    {
      title: "Loadbalancer",
      link: '/load-balancer/checkout'
    },
    {
      title: "VPC",
      link: '/vpc'
    },
    {
      title: "VPN",
      link: ''
    },
    {
      title: "Snapshots",
      link: '/snapshot'
    },
    {
      title: "Backups",
      link: '/backups'
    },
    {
      title: "ISOs",
      link: ''
    },
  ]
  ngOnInit(): void {
    this.toggleService.sideBar$.subscribe((isToggle) => {
      this.isSidebarToggle = isToggle
      console.log(this.isSidebarToggle)
    })
  }


}
