import { Component } from '@angular/core';
import { ShareRecommendationService } from '../share-recommendation.service';
import { Recommendation } from '../recommendation';


@Component({
  selector: 'app-display-rec',
  templateUrl: './display-rec.component.html',
  styleUrls: ['./display-rec.component.css']
})
export class DisplayRecComponent {

  constructor(private shareService: ShareRecommendationService){}

  recommendation: Recommendation = this.shareService.recommendation
}
