import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

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
export class HomeComponent {

}
