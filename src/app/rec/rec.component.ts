import { Component } from '@angular/core';
import { Summoner } from "../summoner";
import { RecServiceService } from '../rec-service.service';
import { Recommendation } from '../recommendation';
import { ShareRecommendationService } from '../share-recommendation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rec',
  templateUrl: './rec.component.html',
  styleUrls: ['./rec.component.css']
})
export class RecComponent {

  constructor(private recService: RecServiceService, 
    private shareService: ShareRecommendationService, 
    private router: Router) {}

  createSummoner() {
    if (this.summoner.name) {
      this.summoner.error = false
      this.recommendation.error = false
      let obs = this.recService.postSummoner(this.summoner)
      obs.subscribe(summonerJSON => {
        this.summoner2.name = summonerJSON.name;
        this.summoner2.error = summonerJSON.error;
      });
      this.summoner.name = "";
    }
  }

  getSummoner() {
    
    if (this.summoner.name) {
      this.recommendation.error = false
      this.summoner.error = false
      let obs = this.recService.getSummoner(this.summoner)
      obs.subscribe(recJSON => {
        console.log(recJSON)
        this.recommendation.one = recJSON.one;
        this.recommendation.two = recJSON.two;
        this.recommendation.three = recJSON.three;
        this.recommendation.error = recJSON.error;
        if(!this.recommendation.error){
          this.shareService.setRecommendation(this.recommendation)
          this.shareService.setSummoner(this.summoner)
          console.log(this.recommendation)
          this.router.navigate(['/recommended'])
        }
        else {
          this.summoner.name = "";
        }
      });
      console.log(this.recommendation)
    }
  }

  recommendation: Recommendation = {
    one: "",
    two: "",
    three: "",
    error: false
  }
  summoner: Summoner = {
    name: "",
    error: false
  };
  summoner2: Summoner = {
    name: "",
    error: false
  };
}
