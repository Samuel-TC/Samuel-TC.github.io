import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './templates/nav-bar/nav-bar.component';
import { FooterComponent } from './templates/footer/footer.component';
import { SkillsComponent } from './views/skills/skills.component';
import { AboutComponent } from './views/about/about.component';
import { EducationComponent } from './views/education/education.component';
import { ContactComponent } from './views/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BotonComponent } from './templates/boton/boton.component';
import { ProjectComponent } from './views/project/project.component';
import { ExperienceComponent } from './views/experience/experience.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SkillsComponent,
    AboutComponent,
    EducationComponent,
    ContactComponent,
    BotonComponent,
    ProjectComponent,
    ExperienceComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
