import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RepositoryComponent} from "./repository/repository.component";
import {TheComponent} from "./the/the.component";

const routes: Routes = [
  {path: "repo/:id", component: RepositoryComponent},
  {path: "", component: TheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
