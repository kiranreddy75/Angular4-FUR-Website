import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images = [{img :'/assets/98111acce7e527cb15825e4ecc302855.jpg'},{img : '/assets/Cwd4U6KUsAAkaLJ.jpg'},
  {img:'/assets/t-hub-hyderabad_650x400_81446491475.jpg'},{img:'/assets/T-Hub-To-Soon-Become-World’s-Largest-Technology-Incubator.jpg'}];

  constructor() { }

  ngOnInit() {
  }

}
