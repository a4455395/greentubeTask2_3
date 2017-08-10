import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from 'localize-router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private localize: LocalizeRouterService) {
    console.log('ROUTES', this.localize.parser.routes);
  }

  ngOnInit() {
  }

  changeLanguage(lang: string) {
    this.localize.changeLanguage(lang);
  }

}
