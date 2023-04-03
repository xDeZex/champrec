import { Injectable } from '@angular/core';
import { Summoner } from './summoner';
import { Recommendation } from './recommendation';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareRecommendationService {

  public summoner: Summoner = {
    name: ""
  }

  public recommendation: Recommendation = {
    one: "",
    two: "",
    three: ""
  }

  constructor() { }

  setSummoner(summoner: Summoner){
    this.summoner = summoner
  }
  setRecommendation(recommendation: Recommendation){
    this.recommendation = recommendation
  }

  private notify = new Subject<any>();
  notifyObservable$ = this.notify.asObservable();
  
  public notifyOther() {
    this.notify.next("");
  }
}
