import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassifyComponent } from './classify/classify.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  {path: '', redirectTo: 'classify', pathMatch: 'full'},
  {path: 'classify', component: ClassifyComponent},
  {path: 'data', component: DataComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
