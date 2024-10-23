import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownComponent } from '../../../../components/dropdown/dropdown.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-graphs',
  standalone: true,
  imports: [RouterLink, DropdownComponent, CommonModule],
  templateUrl: './graphs.component.html',
  styleUrl: './graphs.component.css'
})
export class GraphsComponent {
  graphPeriods = ["1 hour", "6 hours", "24 hours", "7 days", "14 days"]
}
