import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    li> a.active {color: #F97924;}
    @media (max-width: 1200px) {#searchForm {display: none}}
  `]
})

export class NavBarComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() { }
}
