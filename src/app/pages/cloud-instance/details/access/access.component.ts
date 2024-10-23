import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './access.component.html',
  styleUrl: './access.component.css'
})
export class AccessComponent {
   
  accessForm = new FormGroup({
    name:new FormControl('root')
  })

  resetRootPassword(){

  }

  launchRecoveryConsole(){
    
  }
  launchConsole(){

  }


}
