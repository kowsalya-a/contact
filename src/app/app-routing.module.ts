import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplaycontactComponent } from './displaycontact/displaycontact.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path:'template',    component: TemplateComponent },
  { path:'displaycontact',    component: DisplaycontactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true}),
    FormsModule, 
    ReactiveFormsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
