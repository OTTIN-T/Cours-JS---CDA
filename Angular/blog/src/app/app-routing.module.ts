import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { NotesComponent } from './components/notes/notes.component';
import { ResumePostComponent } from './components/resume-post/resume-post.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'posts', component: ListComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'resume/:id', component: ResumePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
