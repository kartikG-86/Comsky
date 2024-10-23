import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load-balancer',
  standalone: true,
  imports: [],
  templateUrl: './load-balancer.component.html',
  styleUrl: './load-balancer.component.css'
})
export class LoadBalancerComponent {
  constructor(
  private router: Router
  ){}
  redirct(){
   this.router.navigateByUrl('networking/load-balancer/checkout')
  }
}
