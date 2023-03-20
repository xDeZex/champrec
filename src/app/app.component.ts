import { Component, HostListener } from '@angular/core';
import { fromEvent, Observable, Subject, takeUntil } from 'rxjs';
import { WindowScrollService } from './window-scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'champrec';
  
	
	destroy = new Subject();
	
	destroy$ = this.destroy.asObservable();
    
	constructor(scrollService: WindowScrollService) {
		fromEvent(window, 'scroll').pipe(takeUntil(this.destroy$))
			.subscribe((e: Event) => scrollService.updateScrollY(window.scrollY));
	}

	ngOnDestroy(): void {
	    this.destroy.complete()
	}
}
