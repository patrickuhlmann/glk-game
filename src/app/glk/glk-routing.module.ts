import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgIntTaskComponent } from './ag-int-task/ag-int-task.component';
import { AuthGuard } from './auth.guard';
import { CeviAlpinTaskComponent } from './cevi-alpin-task/cevi-alpin-task.component';
import { CeviMilitaerTaskComponent } from './cevi-militaer-task/cevi-militaer-task.component';
import { CeviSchweizTaskComponent } from './cevi-schweiz-task/cevi-schweiz-task.component';
import { CeviVielfaltTaskComponent } from './cevi-vielfalt-task/cevi-vielfalt-task.component';
import { CheatComponent } from './cheat/cheat.component';
import { CodeComponent } from './code/code.component';
import { EsgUnifyTaskComponent } from './esg-unify-task/esg-unify-task.component';
import { HoryzonTaskComponent } from './horyzon-task/horyzon-task.component';
import { RegionenTaskComponent } from './regionen-task/regionen-task.component';
import { YmcaTaskComponent } from './ymca-task/ymca-task.component';
import { YwcaTaskComponent } from './ywca-task/ywca-task.component';

const routes: Routes = [
  {
    path: 'horyzon',
    component: HoryzonTaskComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cevi_alpin',
    component: CeviAlpinTaskComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cevi_militaer',
    component: CeviMilitaerTaskComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'esg_unify',
    component: EsgUnifyTaskComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ymca',
    component: YmcaTaskComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ywca',
    component: YwcaTaskComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ag_int',
    component: AgIntTaskComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'vielfalt',
    component: CeviVielfaltTaskComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'regionen',
    component: RegionenTaskComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cevi_schweiz',
    component: CeviSchweizTaskComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'code',
    component: CodeComponent,
  },
  {
    path: 'cheat',
    component: CheatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class GlkRoutingModule {}
