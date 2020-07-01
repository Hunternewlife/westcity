import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';

import { Chat } from '../../modelo/chat';

import { ChatService } from '../../services/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit,AfterViewInit {
  @ViewChild('results', {static: false}) results: ElementRef;
  @ViewChildren('result') result: QueryList<any>;
  private scrollContainer: any;

  public chatMsgs : Chat;
  public showChat : boolean = false;

  public chatResume : string[];

  constructor(private chatService : ChatService) {
    this.chatMsgs = new Chat('','');
    this.chatResume = ['Hola, Soy el asistente de west city, en que te puedo ayudar']
   }
   ngAfterViewInit() {
    this.scrollContainer = this.results.nativeElement;
    this.result.changes.subscribe(_ => this.onItemElementsChanged());    

  }
  
  ngOnInit(): void {
    
  }

  private onItemElementsChanged(): void {
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
    
  }

  getTxtUsuario(){
    console.log(this.chatMsgs.msgUs)
    this.chatResume.push(this.chatMsgs.msgUs);
    this.chatService.generarChat(this.chatMsgs).subscribe(
      (response : any) => {
        this.chatResume.push(response.msgBot);       
      },
      error=>{
        if (error != null) {
          console.log(error)
        }
      }
    )
    this.chatMsgs = new Chat('','');
    
    
  }

  toggleChat(showChat){    
    this.showChat=showChat  
  }
}
