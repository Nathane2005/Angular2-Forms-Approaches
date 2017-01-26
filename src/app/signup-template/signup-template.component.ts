import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../user";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-signup-template',
  templateUrl: './signup-template.component.html',
  styleUrls: ['./signup-template.component.css']
})
export class SignupTemplateComponent implements OnInit {

  @ViewChild('signupForm') signupForm: NgForm;
  user: User;

  constructor() {
  }

  ngOnInit() {
    this.user = new User();
  }

  save() {

    console.log(this.signupForm.form);

    if (this.signupForm.valid) {
      console.log('Saved: ' + JSON.stringify(this.signupForm.value));
    }
  }

}
