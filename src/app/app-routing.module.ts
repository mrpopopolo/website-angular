import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [
  { path: 'cv', component: CvComponent },
  { path: 'presentation', component: PresentationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
