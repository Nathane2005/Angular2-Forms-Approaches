import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormControl} from '@angular/forms';

import {User} from "../user";

@Component({
  selector: 'app-signup-reactive',
  templateUrl: './signup-reactive.component.html',
  styleUrls: ['./signup-reactive.component.css']
})
export class SignupReactiveComponent implements OnInit {

  signupForm: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder) {

    this.signupForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

    // With FormBuilder
    /*this.signupForm = this.formBuilder.group({
     firstName: ['', Validators.required],
     lastName: ['', Validators.required],
     email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
     password: ['', [Validators.required, Validators.minLength(6)]]
     });*/

  }

  ngOnInit() {
  }

  save() {
    console.log(this.signupForm);

    if (this.signupForm.valid) {
      console.log('firstName is ', this.signupForm.get('firstName').value);
      console.log('Saved: ' + JSON.stringify(this.signupForm.value));
    }
  }

}
