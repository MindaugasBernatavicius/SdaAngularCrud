import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  template: `
    <div class="card mx-auto" style="width: 25rem; margin: 25px">
      <div class="card-header">Registration form</div>
      <div class="card-body">
        <form [formGroup]="registrationForm" #formModel="ngForm" (ngSubmit)="onSubmit(registrationForm)">
          <div class="form-group">
            <input formControlName="name" class="form-control"
                   [ngClass]="{ 'is-invalid': registrationForm.get('name').hasError('required') }" placeholder="Your name">
            <div *ngIf="registrationForm.get('name').hasError('required')" class="invalid-feedback">
              Oops, please provide a name!
            </div>
            <p>Your chosen name: {{ registrationForm.get('name').value }}</p>
          </div>
          <div class="form-group">
            <input formControlName="email" class="form-control" required placeholder="Your email">
            <div class="form-control" *ngIf="registrationForm.controls.email.hasError('pattern')">
              Oops, wrong pattern buddy!
            </div>
          </div>
          <div class="form-group">
            <input formControlName="message" class="form-control" name="intro" placeholder="Your intro">
            <div class="form-control" *ngIf="registrationForm.controls.message.errors?.minlength">
              Write something longer please!
            </div>
          </div>
          <button class="btn btn-warning" type="submit" [disabled]="registrationForm.invalid">Send</button>
          <button class="btn btn-link" (click)="updateAllValues()" type="button">Update values</button>
          <button class="btn btn-link" (click)="updateName()" type="button">Update name</button>
        </form>

      </div>
      <div class="card-header" style="border-top: 1px solid lightgray">
        <pre>{{ 'valid ? ' + registrationForm.valid }}</pre>
        <pre>{{ 'submitted ? ' + formModel.submitted }}</pre>
        <pre>{{ 'touched ? ' + registrationForm.touched }}</pre>
        <pre>{{ registrationForm.value | json }}</pre>
      </div>
    </div>
  `
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['Benedict', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      message: ['', [Validators.required, Validators.minLength(15)]]
    });
  }

  updateAllValues() {
    this.registrationForm.setValue({
      name: 'Egg Benedict',
      email: 'Humpty Dumpty',
      message: 'Amazing Message',
    });
  }

  updateName() {
    this.registrationForm.patchValue({
      name: 'Egg Benedictus',
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid);
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Intro', form.value.message);
  }
}
