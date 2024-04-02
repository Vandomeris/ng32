import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { MessagesComponent } from '../messages/messages.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MessagesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  

  title: string = 'Tour of Heroes';
}
