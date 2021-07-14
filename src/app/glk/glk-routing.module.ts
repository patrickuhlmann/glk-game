import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralTaskComponent } from './general-task/general-task.component';

const routes: Routes = [
  {
    path: 'horyzon',
    component: GeneralTaskComponent,
  },
  {
    path: 'cevi_alpin',
    component: GeneralTaskComponent,
  },
  {
    path: 'cevi_militaer',
    component: GeneralTaskComponent,
  },
  {
    path: 'esg_unify',
    component: GeneralTaskComponent,
  },
  {
    path: 'ymca',
    component: GeneralTaskComponent,
  },
  {
    path: 'ywca',
    component: GeneralTaskComponent,
  },
  {
    path: 'ag_int',
    component: GeneralTaskComponent,
  },
  {
    path: 'vielfalt',
    component: GeneralTaskComponent,
  },
  {
    path: 'regionen',
    component: GeneralTaskComponent,
  },
  {
    path: 'cevi_schweiz',
    component: GeneralTaskComponent,
  },
  {
    path: 'hasliberg',
    component: GeneralTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class GlkRoutingModule {}
