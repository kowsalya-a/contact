import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { IgxListModule } from 'igniteui-angular';
import { 
	IgxAvatarModule,
	IgxFilterModule,
	IgxIconModule,
	IgxListModule,
	IgxInputGroupModule,
	IgxButtonGroupModule
 } from "igniteui-angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DisplaycontactComponent } from './displaycontact/displaycontact.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    LoginComponent,
    DisplaycontactComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxAvatarModule,
		IgxFilterModule,
		IgxIconModule,
		IgxListModule,
		IgxInputGroupModule,
    IgxButtonGroupModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
