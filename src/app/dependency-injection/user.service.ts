import { Injectable, Inject } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BASE_URL} from './constants';


@Injectable()
export class UserService {

	constructor(@Inject(BASE_URL) private baseUrl) {

	}

  	create(firstName: string){
  		console.log('---Inserting---' + firstName);
  		console.log('Callind endpoint ' + this.baseUrl);
  		//console.log(firstName);
  	}
}