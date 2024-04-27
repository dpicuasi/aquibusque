import { Component,OnInit, signal } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { AnuncioService } from '../../services/anuncio.service';
import { IAnuncio } from '../../interfaces/IAnuncio';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MaterialModule,
    ShareButtonsModule,
    ShareIconsModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit {

  
  cards = signal<IAnuncio[]>([]);
  
  public ngOnInit(): void {
  }

  constructor(anuncioService: AnuncioService) {
     this.cards.set(anuncioService.info);
   }

  images = [
    'nature',
    'sky',
    'grass',
    'mountains',
    'rivers',
    'glacier',
    'forest',
    'streams',
    'rain',
    'clouds',
  ];




}



