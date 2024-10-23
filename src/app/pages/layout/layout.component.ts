import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { ToggleService } from '../../core/services/toggle.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarComponent,RouterOutlet , HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent  {

}
