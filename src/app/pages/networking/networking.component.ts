import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-networking',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './networking.component.html',
  styleUrl: './networking.component.css'
})
export class NetworkingComponent {
  networkLinks =[
    {name:'Reserved IPs',link:'/reserved-ips'},
    {name:'Load Balancers',link:'/load-balancer'},
    {name:'VPC', link:'/vpc'},
    {name:'Firewalls', link:'/firewalls'},
  ]
}
