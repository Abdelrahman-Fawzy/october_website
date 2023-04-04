import { UniversityDetailsComponent } from './universities/university-details/university-details.component';
import { StudyMajorsComponent } from './study-majors/study-majors.component';
import { UniversitiesComponent } from './universities/universities.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'universities',
    component: UniversitiesComponent,
    pathMatch: 'full'
  },
  {
    path: 'universities/:id',
    component: UniversityDetailsComponent,
    pathMatch: 'full'
  },
  {
    path: 'study-majors',
    component: StudyMajorsComponent,
    pathMatch: 'full'
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
