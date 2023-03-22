import { Component } from '@angular/core';
import { WindowScrollService } from '../window-scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  scrollY: number = 0
  show = true
  
  constructor(public scrollService: WindowScrollService){
    scrollService.scrollY$.subscribe((y: number) => this.scrollUpdate(y))
  }

  scrollUpdate(y: number): void {
    console.log(document.activeElement?.classList[0])
    if(document.activeElement?.classList[0] === "headermenuLink"){
      this.show = true
    }
    else{
      if (y < this.scrollY || y === 0){
        this.show = true
      }
      else {
        this.show = false
      }
    }
    this.scrollY = y
    console.log(this.show)
  }
}
