import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-module',
  templateUrl: './forms-module.component.html'
})
export class FormsModuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('submitted' , form);
  }

}
