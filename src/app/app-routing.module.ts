import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendComponent } from './recommend/recommend.component';
import { BodyComponent } from "./body/body.component";

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'recommend', component: RecommendComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }