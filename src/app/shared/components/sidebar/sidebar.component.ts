import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  categories = ['kategoria1','kategoria2','kategoria3','kategoria4','kategoria5',]

  constructor() { }

  ngOnInit(): void {
  }

}
