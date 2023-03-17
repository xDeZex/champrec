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
import { HttpClientModule } from '@angular/common/http';
import { DisplayRecComponent } from './display-rec/display-rec.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProjectsComponent } from './projects/projects.component';

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
    RecComponent,
    DisplayRecComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
