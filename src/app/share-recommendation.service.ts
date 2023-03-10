import { Injectable } from '@angular/core';
import { Summoner } from './summoner';
import { Recommendation } from './recommendation';

@Injectable({
  providedIn: 'root'
})
export class ShareRecommendationService {

  public summoner: Summoner = {
    name: "",
    error: false
  }

  public recommendation: Recommendation = {
    one: "",
    two: "",
    three: "",
    error: false
  }

  constructor() { }

  setSummoner(summoner: Summoner){
    this.summoner = summoner
  }
  setRecommendation(recommendation: Recommendation){
    this.recommendation = recommendation
  }
}
