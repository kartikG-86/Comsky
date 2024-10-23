import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-firewalls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './firewalls.component.html',
  styleUrl: './firewalls.component.css'
})
export class FirewallsComponent {
  tableHeading= ["Name", "Droplets", "Rules", "Created", ""]
}
