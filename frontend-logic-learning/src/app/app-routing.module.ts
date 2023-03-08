import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Topic1Component } from './components/topic1/topic1.component';
import { Topic2Component } from './components/topic2/topic2.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'topic1', component: Topic1Component },
  { path: 'topic2', component: Topic2Component },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
