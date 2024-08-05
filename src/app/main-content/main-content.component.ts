import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { WelcomecompComponent } from '../welcomecomp/welcomecomp.component';
import { TeamcompComponent } from '../teamcomp/teamcomp.component';
import { PackagesComponent } from '../packages/packages.component';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,WelcomecompComponent,TeamcompComponent,PackagesComponent,NewsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
