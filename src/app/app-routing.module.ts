import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found/page-not-found.component';
import { WatchComponent } from './watch/watch.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'watch',
    component: WatchComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then((p) => p.ProfileModule),
  },
  {
    path: 'feed',
    loadChildren: () =>
      import('./modules/feed/feed.module').then((f) => f.FeedModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
