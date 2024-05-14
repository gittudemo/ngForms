import { Component } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {



  saveForm(formData : any) {

    //console.log(formData.value);
    console.log(formData);

  }
}
