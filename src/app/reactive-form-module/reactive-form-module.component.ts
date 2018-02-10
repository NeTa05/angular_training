 import { 
  Component,
  OnInit 
} from '@angular/core';

import {
  FormBuilder,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-module',
  templateUrl: './reactive-form-module.component.html',
  styleUrls: []
})
export class ReactiveFormModuleComponent implements OnInit {
  myForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'firstName': 'jorge'
    });
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);

    console.log(this.myForm);

    if (this.myForm.valid) {
      console.log('ok');
    }
    else{
      console.log('errors');
    }

    
  }
}
