import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-learn-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learn-btn.component.html',
  styleUrl: './learn-btn.component.css'
})
export class LearnBtnComponent {
  @Input() title: any
  @Input() iconType: any
}
