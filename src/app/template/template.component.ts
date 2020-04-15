import { Component, OnInit, Pipe } from '@angular/core';
import { IgxFilterOptions } from "igniteui-angular";
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  searchContact: string;
  filterName:string;
  namesFiltered = [];

  contacts = [];

  constructor(private navigate: Router, private service : ContactService) { }

  ngOnInit(): void {
    this.phoneDetails();
  }

  get filterContacts() {
    const fo = new IgxFilterOptions();
    fo.key = "name";
    fo.inputValue = this.searchContact;
    return fo;
  }

  display(contact) {
    // this.navigate.navigateByUrl('displaycontact');
   this.navigate.navigateByUrl('displaycontact', { state: { c: contact } });
  }

  phoneDetails() {
    this.service.contactInformation("assets/data.json").subscribe(data => { 
      this.contacts = data['contactdetails'];
    });
  }

  // public toggleFavorite(contact: any) {
  //   contact.isFavorite = !contact.isFavorite;
  // }
  
}

  


  

  


