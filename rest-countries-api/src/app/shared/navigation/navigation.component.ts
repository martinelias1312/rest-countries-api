import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public darkMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onSetColorMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle("dark-theme");
  }
}
