import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReactiveComponent } from './components/add-reactive/add-reactive.component';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [
  { path: '', component: AddComponent },
  { path: 'home', component: AddComponent },
  { path: 'reactive', component: AddReactiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
