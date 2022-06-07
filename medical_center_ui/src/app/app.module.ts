import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListElementComponent } from './contact-list-element/contact-list-element.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ChatComponent } from './chat/chat.component';
import { ChatListElementComponent } from './chat-list-element/chat-list-element.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListElementComponent,
    ContactListComponent,
    ChatPageComponent,
    ChatComponent,
    ChatListElementComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
