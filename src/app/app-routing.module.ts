import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassifyComponent } from './classify/classify.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  {path: '', component: ClassifyComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
