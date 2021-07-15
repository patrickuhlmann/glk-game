import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { VersionComponent } from './core/version/version.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./glk/glk-routing.module').then((mod) => mod.GlkRoutingModule),
  },
  {
    path: 'version',
    component: VersionComponent,
  },
  {
    path: 'cheat',
    redirectTo: '/tasks/cheat',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
