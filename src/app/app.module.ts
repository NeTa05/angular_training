

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes,
  Router
} from '@angular/router';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item.component';
import { FormsModuleComponent } from './forms-module/forms-module.component';
import { ReactiveFormModuleComponent } from './reactive-form-module/reactive-form-module.component';
import { ValidatorComponent } from './validator/validator.component';
import { ExampleDef } from './example.model';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { ExampleComponent } from './example/example.component';
/*
 */
export const examples: ExampleDef[] = [
   {label: 'FormsModule', name: 'FormsModule', path: 'forms-module', component: FormsModuleComponent},
   {label: 'ReactiveFormModule', name: 'DemoFormSkuWithBuilder', path: 'reactive-forms', component: ReactiveFormModuleComponent},
   {label: 'Validator', name: 'DemoFormValidationsExplicit', path: 'validator', component: ValidatorComponent},
   {label: 'Dependency Injection', name: 'Dependency Injection', path: 'dependency-injection', component: DependencyInjectionComponent},
    {label: 'example', name: 'example', path: 'example', component: ExampleComponent},
];

const routes: Routes = [
  { path: '', component: FormsModuleComponent, pathMatch: 'full' },
  { path: 'forms-module', component: FormsModuleComponent, pathMatch: 'full' },
  { path: 'reactive-forms', component: ReactiveFormModuleComponent, pathMatch: 'full' },
  { path: 'validator', component: ValidatorComponent, pathMatch: 'full'},
  { path: 'dependency-injection', component: DependencyInjectionComponent, pathMatch: 'full'},
  { path: 'example', component: ExampleComponent, pathMatch: 'full'}
];

export const RoutePath: Array<any> = [
  { provide: 'ExampleDefs',    useValue: examples }
];

//Injections
import { UserService } from './dependency-injection/user.service';
import { BASE_URL } from './dependency-injection/constants';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    ReactiveFormModuleComponent,
    FormsModuleComponent,
    ValidatorComponent,
    DependencyInjectionComponent,
    ExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    { provide: BASE_URL, useValue: BASE_URL },
    RoutePath
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
