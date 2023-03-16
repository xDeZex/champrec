import { Component } from '@angular/core';
import { Summoner } from "../summoner";
import { RecServiceService } from '../rec-service.service';
import { Recommendation } from '../recommendation';
import { ShareRecommendationService } from '../share-recommendation.service';
import { Router } from '@angular/router';
import { ErrorWrapper } from '../errorWrapper';
import { HMError } from "../error";

@Component({
  selector: 'app-rec',
  templateUrl: './rec.component.html',
  styleUrls: ['./rec.component.css']
})
export class RecComponent {

  ngOnInit() {
    if (window.screen.width <= 550) { // 768px portrait
      this.mobile = true;
    }
  }

  constructor(private recService: RecServiceService, 
    private shareService: ShareRecommendationService, 
    private router: Router) {}

  createSummoner() {
    if(this.name != "" && !this.processingRequest){
      this.processingRequest = true
      this.response.body = null
      this.response.error = null
      let obs = this.recService.postSummoner(this.name)
      obs.subscribe(recJSON => {
        this.response = recJSON
        this.processingRequest = false
      })
    }
  }

  getSummoner() {
    if(this.name != "" && !this.processingRequest){
      this.processingRequest = true
      this.response.body = null
      this.response.error = null
      let obs = this.recService.getSummoner(this.name)
      obs.subscribe(recJSON => {
        this.response = recJSON
        console.log(this.response)
        if (this.response.body != null) {
          this.shareService.setRecommendation(this.response.body)
          this.shareService.setSummoner({name: this.name})
          this.router.navigate(['/recommended'])
        }
        this.processingRequest = false
      })
    }

  }
  processingRequest: boolean = false
  name: string = ""
  response: ErrorWrapper = {
    error: null,
    body: null
  }
  mobile: boolean = false
}
