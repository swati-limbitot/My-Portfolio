import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  title = 'comments';
  contactForm = new FormGroup({
    name : new FormControl(),
    email: new FormControl(),
    comment:new FormControl()
    
  })
  onSubmit() {
    console.log(this.contactForm.value);
  }
}


