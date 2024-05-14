import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {


 std = new Student('kumar',0,'kumar@gmail.com')

  saveForm(formData : any) {

    //console.log(formData.value);
    //console.log(formData);
    //const std = new Student(formData.name, formData.age, formData.email)
    console.log(this.std);

  }
}
