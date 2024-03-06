import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListEventComponent } from './list-event/list-event.component';
import { CreateEventComponent } from './create-event/create-event.component';

const routes: Routes = [
  {
    path: '',
    component: ListEventComponent,
  },
  {
    path: 'create',
    component: CreateEventComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
