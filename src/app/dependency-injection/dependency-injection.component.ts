import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html'
})
export class DependencyInjectionComponent implements OnInit {

  constructor(private userService: UserService) {

  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
  	//console.log('submitted' , form);
  	this.userService.create(form.firstName);
  }

}
