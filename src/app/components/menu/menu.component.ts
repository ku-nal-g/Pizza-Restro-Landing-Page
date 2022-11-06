import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  pizzaDiv: boolean = true;
  saladsDiv: boolean = false;
  starterDiv: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleDiv1() {
    this.pizzaDiv = true;
    this.saladsDiv = false;
    this.starterDiv = false;
  }
  toggleDiv2() {
    this.pizzaDiv = false;
    this.saladsDiv = true;
    this.starterDiv = false;
  }
  toggleDiv3() {
    this.pizzaDiv = false;
    this.saladsDiv = false;
    this.starterDiv = true;
  }
  getClass1() {
    return this.pizzaDiv ? 'active' : '';
  }
  getClass2() {
    return this.saladsDiv ? 'active' : '';
  }
  getClass3() {
    return this.starterDiv ? 'active' : '';
  }
}
