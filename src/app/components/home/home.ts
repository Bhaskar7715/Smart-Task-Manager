import { Component } from '@angular/core';
import { Common } from '../../services/common';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  profileData:any;
  constructor(private commonService:Common) {
    this.commonService.changeProfile$.subscribe((res:any)=>[
      console.log('res',res),
      this.profileData = res
    ])
  }
}
