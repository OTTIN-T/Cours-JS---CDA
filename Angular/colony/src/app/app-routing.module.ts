import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'home', component: ListComponent },
  { path: 'student/:id', component: StudentComponent },
  { path: 'form', component: FormComponent },
  { path: 'form/:id', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
