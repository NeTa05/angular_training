import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styles: []
})
export class ValidatorComponent
 {
  myForm: FormGroup;
  firstName: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'firstName':  ['', Validators.required ]
    });
    this.firstName = this.myForm.controls['firstName'];
  }

  onSubmit(value: string): void {
    //let asd = this.firstName.hasError('required');
    //let asdf = this.firstName;

    console.log('you submitted value: ', value);
  }

}
