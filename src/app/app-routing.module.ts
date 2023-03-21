import { StudyMajorsComponent } from './study-majors/study-majors.component';
import { UniversitiesComponent } from './universities/universities.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'study-majors',
    component: StudyMajorsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
