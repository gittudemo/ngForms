import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent {

  signupForm  = new FormGroup({
    name: new FormControl(''),
     age: new FormControl(''),
      email: new FormControl('')
  })


  handleSubmit(signupForm : any) {
    console.log(this.signupForm.value);


  }

}
