import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent {

  title='mdf';

  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    state: new FormControl()
    
  })

  onSubmit(){
    console.log(this.contactForm.value);
  }

}
