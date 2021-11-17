import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerComponent } from './components/beer/beer.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'home', component: ListComponent },
  { path: 'beer/:id', component: BeerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
