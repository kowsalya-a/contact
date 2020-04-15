import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaycontact',
  templateUrl: './displaycontact.component.html',
  styleUrls: ['./displaycontact.component.scss']
})
export class DisplaycontactComponent implements OnInit {

  constructor(private navigate: Router) { }

  ngOnInit(): void {
    console.log(window.history.state);
    if(window.history.state && !window.history.state.c) {
      this.navigate.navigateByUrl('template');
    }
  }

  public toggleFavorite(contact: any) {
    contact.isFavorite = !contact.isFavorite;
  }

  
}
