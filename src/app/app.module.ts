import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BigpicComponent } from './bigpic/bigpic.component';
import { BranchesComponent } from './branches/branches.component';
import { TextcontainerComponent } from './textcontainer/textcontainer.component';
import { MainComponent } from './main/main.component';
import { RecommendComponent } from './recommend/recommend.component';
import { BodyComponent } from './body/body.component';
import { RecComponent } from './rec/rec.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BigpicComponent,
    BranchesComponent,
    TextcontainerComponent,
    MainComponent,
    RecommendComponent,
    BodyComponent,
    RecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
