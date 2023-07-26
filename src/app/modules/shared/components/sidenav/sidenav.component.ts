import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{

    mobileQuery: MediaQueryList;

    menuNav = [
      {name: "Home", router: "home" , icon: "home"},
      {name: "Categorias", router:"home", icon:"category"},
      {name: "Productos", router: "home", icon: "production_quantity_limits"}

    ]
nav: any;

    constructor(media:MediaMatcher){
      this.mobileQuery= media.matchMedia(('max-width: 600px'))
    }

    ngOnInit(): void{

    }
}
