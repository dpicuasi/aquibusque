import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material.module';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    MaterialModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  
  title = 'aquibusque';
  seo = inject(SeoService);
  
  ngOnInit(): void {
    this.seo.title.setTitle('Cursos de Java Quito - Ecuador | aquibusque.com');
    this.seo.meta.updateTag({name:"description",content:"Ofrecemos cursos de Java en la ciudad de Quito. Aprende Java con nuestros expertos instructores y avanza en tu carrera profesional."});
    this.seo.setCanonicalURL("https://aquibusque-front.web.app/");
    this.seo.setIndexFollow(true);
  }
}
