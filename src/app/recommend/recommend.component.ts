import { Component } from '@angular/core';
import { ShareRecommendationService } from '../share-recommendation.service';
@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent {

  constructor(private shareService: ShareRecommendationService) {}
}

