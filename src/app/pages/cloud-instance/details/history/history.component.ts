import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  tableRows = ["Event", "Initiated", "Execution Time"]

  instanceHistory = [
    { event: 'Snapshot', initiated: '39 minutes ago', executionTime: '32 seconds' },
    { event: 'Enable Backups', initiated: '3 hours ago', executionTime: '' },
    { event: 'Password Reset', initiated: 'Yesterday', executionTime: '25 seconds' },
    { event: 'Disable Backups', initiated: 'Yesterday', executionTime: '' },
    { event: 'Enable Backups', initiated: 'Yesterday', executionTime: '' },
    { event: 'Snapshot', initiated: '5 days ago', executionTime: '11 seconds' },
    { event: 'Snapshot', initiated: '5 days ago', executionTime: '12 seconds' },
    { event: 'Snapshot', initiated: '5 days ago', executionTime: '28 seconds' },
    { event: 'Snapshot', initiated: '6 days ago', executionTime: '13 seconds' },
    { event: 'Snapshot', initiated: '6 days ago', executionTime: '29 seconds' },
    { event: 'Create', initiated: '6 days ago', executionTime: '21 seconds' }
  ];

  tableData: any

  ngOnInit() {
    this.tableData = this.instanceHistory.map((data: any) => {
      return {
        "Event": data?.event,
        "Initiated": data?.initiated,
        "Execution Time": data?.executionTime
      }
    })
  }

}
