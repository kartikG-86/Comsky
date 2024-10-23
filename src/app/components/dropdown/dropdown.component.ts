import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {

   selectedData:any
   @Input() width:any
   @Input() dropdownData:any
   @Output() selectedOption = new EventEmitter<any>()


   changeSelectedOption(option:any){
    this.selectedData = option
    this.selectedOption.emit({option:this.selectedData})
   }
   
}
