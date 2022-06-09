import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  call():void{
    this.router.navigateByUrl('call')
  }

}
