import { Component } from '@angular/core';
import { Summoner } from "../summoner";

@Component({
  selector: 'app-rec',
  templateUrl: './rec.component.html',
  styleUrls: ['./rec.component.css']
})
export class RecComponent {
  summoner: Summoner = {
    name: ""
  };
}
