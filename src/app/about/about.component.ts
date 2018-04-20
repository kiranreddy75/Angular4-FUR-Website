import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  image = { img : "/assets/t-hub-hyderabad_650x400_81446491475.jpg"}

  constructor() { }

  ngOnInit() {
  }

}
