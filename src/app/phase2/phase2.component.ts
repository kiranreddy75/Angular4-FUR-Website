import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phase2',
  templateUrl: './phase2.component.html',
  styleUrls: ['./phase2.component.scss']
})
export class Phase2Component implements OnInit {

  images = [{img :'/assets/064810T-HUB-PHASE-II-1024x619.jpg'},{img : '/assets/Cwd4U6KUsAAkaLJ.jpg'}];

  constructor() { }

  ngOnInit() {
  }

}
