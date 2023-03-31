import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UniversitiesComponent } from './universities/universities.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { StudyMajorsComponent } from './study-majors/study-majors.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { UniversityDetailsComponent } from './universities/university-details/university-details.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RegisterModalComponent } from './shared/register-modal/register-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UniversitiesComponent,
    PaginationComponent,
    StudyMajorsComponent,
    UniversityDetailsComponent,
    RegisterModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    BsDropdownModule,
    AccordionModule,
    CollapseModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
