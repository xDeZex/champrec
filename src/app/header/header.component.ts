import { Component } from '@angular/core';
import { WindowScrollService } from '../window-scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  scrollY: number = 0
  topStyle = {'top': '0px'}
  
  constructor(public scrollService: WindowScrollService){
    scrollService.scrollY$.subscribe((y: number) => this.scrollUpdate(y))
  }

  scrollUpdate(y: number): void {
    if (y <= this.scrollY){
      this.topStyle['top'] = '0px'

    }
    else{
      this.topStyle['top'] = '-70px'
    }
    this.scrollY = y
  }
}
