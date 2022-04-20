import { Component } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faceSnaps!: FaceSnap[];


  ngOnInit() {
    this.faceSnaps = [
      {
        title :'Franck',
        description : 'Il nous surveille ! ',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate :new Date(),
        snaps:0, 
        location : "Pau"
      },

   
      {
        title:"Travel",
        description :"Bali",
        imageUrl:"assets/img/Travel.avif",
        createdDate:new Date(),
        snaps : 0,
        
      },

      {
        title :"Road Trip",
        description :"Desert",
        imageUrl:"assets/img/roadtrip.png",
        createdDate:new Date(),
        snaps:0,
        location : "Australie"
      },
      {
        title :'Franck',
        description : 'Il nous surveille ! ',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate :new Date(),
        snaps:0, 
        location : "Pau"
      },

   
      {
        title:"Travel",
        description :"Bali",
        imageUrl:"assets/img/Travel.avif",
        createdDate:new Date(),
        snaps : 199,
        
      },

      {
        title :"Road Trip",
        description :"Desert",
        imageUrl:"assets/img/roadtrip.png",
        createdDate:new Date(),
        snaps:0,
        location : "Australie"
      },

  ]

  }

}
