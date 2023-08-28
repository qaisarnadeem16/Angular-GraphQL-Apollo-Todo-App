import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoComponent } from './Components/todo/todo.component';

const routes: Routes = [
  
  { path: 'todo', component: AppComponent }, 
  { path: '', component: TodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
