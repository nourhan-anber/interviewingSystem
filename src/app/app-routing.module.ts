import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientSideComponent } from './client-side/client-side.component';
import { IntroduceComponent } from './client-side/introduce/introduce.component';
import { QuestionsComponent } from './client-side/questions/questions.component';


const routes: Routes = [
  { path: '', redirectTo: 'start', 'pathMatch': 'full'},
  {path: '', component: ClientSideComponent, children: [
    {path: 'start', component: IntroduceComponent},
    {path: 'question/:questionId', component: QuestionsComponent},
    {path: 'thankyou', component: ClientSideComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
