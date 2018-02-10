import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {


  submitted: boolean;
  form: FormGroup;

  constructor(formBuilder: FormBuilder) { 

  	this.form = formBuilder.group({
  		code: ['', Validators.compose(
  			[Validators.required, this.validateCode]
  		)],
  		selected: ['', Validators.required]
  	});

  }

  //{key : true}
  validateCode(control: FormControl): { [s: string]: boolean } {
	  //error			
	  //02
	  if (!control.value.match(/^01/)) {
	  	console.log('error');
	    return {code: true};
	  }
	  console.log('ok');
	  //no es necesario
	  return null;
	}



  ngOnInit() {
  }

  onSubmit(value : any){
  	this.submitted = true;

  	console.log('fields', value);

  }

}
