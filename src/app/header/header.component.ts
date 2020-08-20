import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  aboutMenuItem = 'About Us 1111';
  totalPrice = 100;

  constructor() {
    setTimeout(() => {
      this.aboutMenuItem = 'About Conpany';
      this.totalPrice = 200;
    }, 3000);
  }

  ngOnInit(): void {
  }


  getTotalPrice(): number {
    return this.totalPrice;
  }
}
