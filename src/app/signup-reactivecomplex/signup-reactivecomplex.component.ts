import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn} from '@angular/forms';
import {User} from "../user";

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-signup-reactivecomplex',
  templateUrl: './signup-reactivecomplex.component.html',
  styleUrls: ['./signup-reactivecomplex.component.css']
})
export class SignupReactivecomplexComponent implements OnInit {

  signupForm: FormGroup;
  emailCurrentErrorMessage: string;

  user: User;

  private emailErrorMessages = {
    required: 'Email is required',
    pattern: 'Email format is invalid'
  };

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    const emailControl = this.signupForm.get('email');
    emailControl.valueChanges
      .debounceTime(1000)
      .subscribe(() => this.setEmailMessages(emailControl));
  }

  save() {
    console.log(this.signupForm);

    if (this.signupForm.valid) {
      console.log('firstName is ', this.signupForm.get('firstName').value);
      console.log('Saved: ' + JSON.stringify(this.signupForm.value));
    }
  }

  private setEmailMessages(c: AbstractControl): void {
    this.emailCurrentErrorMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailCurrentErrorMessage = Object.keys(c.errors).map(key =>
        this.emailErrorMessages[key]).join(' ');

      console.log('this.emailCurrentErrorMessage: ', this.emailCurrentErrorMessage);
    }
  }

}
