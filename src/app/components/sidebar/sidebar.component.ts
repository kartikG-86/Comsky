import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ToggleService } from '../../core/services/toggle.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  sidebarList = [{
    title: "Dashboard",
    isDropdown: false,
    icon: 'bi-grid',
    link: '/'
  },
  {
    title: "Manage",
    isDropdown: true,
    isBorder: true,
    subList: [
      {
        title: "Cloud Instances",
        link: '/cloud-instance'
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
        title: "Networking",
        link: '/networking'
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
    ],
    icon: 'bi-kanban'
  },
  {
    title: "Settings",
    isDropdown: false,
    icon: 'bi-gear'
  },
  {
    title: "Support",
    isDropdown: false,
    icon: 'bi-ticket'
  },
  ]

  activeDropdown: any
  isActiveSidebar: boolean = true
  constructor(private router: Router, private renderer: Renderer2, private toggleService: ToggleService) { }
  showDropdown(sideItem: any) {
    console.log(sideItem)
    if (sideItem.title == this.activeDropdown?.title) {
      this.activeDropdown = null
    }
    else {
      this.activeDropdown = sideItem
    }
  }

  redirectToUrl(category: any) {
    this.router.navigateByUrl(category?.link)
  }

  hideSidebar() {
    this.isActiveSidebar = !this.isActiveSidebar
    this.toggleService.setSideBarToggle(this.isActiveSidebar)
  }
}
