import { Call } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallComponent } from './call/call.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { MainComponent } from './main/main.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path: 'home', component : MainComponent},
  {path: '', component : SignInComponent},
  {path: 'call', component: CallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
