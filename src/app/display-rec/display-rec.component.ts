import { Component } from '@angular/core';
import { ShareRecommendationService } from '../share-recommendation.service';
import { Recommendation } from '../recommendation';
import { Router } from '@angular/router';
import { Summoner } from '../summoner';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display-rec',
  templateUrl: './display-rec.component.html',
  styleUrls: ['./display-rec.component.css']
})
export class DisplayRecComponent {

  private subscription?: Subscription

  constructor(private shareService: ShareRecommendationService){}

  recommendation: Recommendation = this.shareService.recommendation
  summoner: Summoner = this.shareService.summoner
  hide: boolean = true
  newRecommendation(){
    this.hide = false
    this.recommendation = this.shareService.recommendation
    this.summoner = this.shareService.summoner
    const element = document.getElementById("displayRec");
    element?.scrollIntoView({ behavior: "smooth" });
  }

  
  ngOnInit() {
    this.subscription = this.shareService.notifyObservable$.subscribe((res) => {
      this.newRecommendation()
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
