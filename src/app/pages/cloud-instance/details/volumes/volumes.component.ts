import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-volumes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './volumes.component.html',
  styleUrl: './volumes.component.css'
})
export class VolumesComponent {
  table_data: any
  docs_info: any[] = [
    {
      subTitle: 'Overview',
      description: 'Explore block storage and unlock the potential of volumes for your needs.',
      link: '/volumes'
    },
    {
      subTitle: 'Tell us what you think',
      description: 'Share your feedback on block storage with us.',
      link: '/volumes'
    },
  ]

  userVolumes: any[] = [
    {
      name: "volume-blr1-01",
      size: "1 GB",
      createdAt: "7 minutes ago",
      dataCenter: {
        code: "BLR1"
      }
    }
  ]

  actionBtnsInfo = [
    {
      title: 'Detach from Instance'
    },
    {
      title: 'Increase size'
    },
    {
      title: 'Take snapshot'
    },
    {
      title: 'Config instructions'
    },
    {
      title: 'Delete',
      class: 'text-danger border-top'
    },
  ]

  table_rows = ["Name", "Size", "Created", ""]


}
