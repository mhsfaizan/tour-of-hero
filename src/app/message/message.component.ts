import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages:string[];
  constructor(public message:MessageService) { 
  }

  ngOnInit() {
    this.message.getMessages()
    .subscribe((messages)=>{
      this.messages = messages;
    })
  }
  clear(){
    this.message.clear()
    .subscribe((messages)=>{
      this.messages = messages;
    })
  }

}
