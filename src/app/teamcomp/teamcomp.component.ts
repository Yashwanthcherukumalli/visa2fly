import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-teamcomp',
  standalone: true,
  imports: [CommonModule, CarouselModule, ReactiveFormsModule],
  templateUrl: './teamcomp.component.html',
  styleUrls: ['./teamcomp.component.scss']
})
export class TeamcompComponent {
  teamMembers = [
    {
      name: 'Julian Jameson',
      position: 'Professor',
      image: '../../assets/frontend-interview-assets/frontend-interview-assets/user-cover-1.png',
      facebook: '../../assets/frontend-interview-assets/frontend-interview-assets/facebook.svg',
      instagram: '../../assets/frontend-interview-assets/frontend-interview-assets/instagram.svg',
      twitter: '../../assets/frontend-interview-assets/frontend-interview-assets/twitter.svg'
    },
    {
      name: 'Alex Smith',
      position: 'Lecturer',
      image: '../../assets/frontend-interview-assets/frontend-interview-assets/user-cover-2.png',
      facebook: '../../assets/frontend-interview-assets/frontend-interview-assets/facebook.svg',
      instagram: '../../assets/frontend-interview-assets/frontend-interview-assets/instagram.svg',
      twitter: '../../assets/frontend-interview-assets/frontend-interview-assets/twitter.svg'
    },
    {
      name: 'Emily Johnson',
      position: 'Assistant Professor',
      image: '../../assets/frontend-interview-assets/frontend-interview-assets/user-cover-3.png',
      facebook: '../../assets/frontend-interview-assets/frontend-interview-assets/facebook.svg',
      instagram: '../../assets/frontend-interview-assets/frontend-interview-assets/instagram.svg',
      twitter: '../../assets/frontend-interview-assets/frontend-interview-assets/twitter.svg'
    },
    {
      name: 'Michael Brown',
      position: 'Senior Lecturer',
      image: '../../assets/frontend-interview-assets/frontend-interview-assets/user-cover-4.png',
      facebook: '../../assets/frontend-interview-assets/frontend-interview-assets/facebook.svg',
      instagram: '../../assets/frontend-interview-assets/frontend-interview-assets/instagram.svg',
      twitter: '../../assets/frontend-interview-assets/frontend-interview-assets/twitter.svg'
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1
    }
  ];
  }
