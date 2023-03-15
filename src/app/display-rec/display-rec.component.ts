import { Component } from '@angular/core';
import { ShareRecommendationService } from '../share-recommendation.service';
import { Recommendation } from '../recommendation';
import { Router } from '@angular/router';
import { Summoner } from '../summoner';

@Component({
  selector: 'app-display-rec',
  templateUrl: './display-rec.component.html',
  styleUrls: ['./display-rec.component.css']
})
export class DisplayRecComponent {

  constructor(private shareService: ShareRecommendationService, private router: Router){}

  recommendation: Recommendation = this.shareService.recommendation
  summoner: Summoner = this.shareService.summoner

  ngOnInit(){
    if(!this.recommendation.one){
      this.router.navigate(['/recommend'])
    }
  }
}
