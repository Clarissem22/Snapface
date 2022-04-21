import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { getTestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Franck',
      description: 'Il nous surveille ! ',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 999,
      location: 'Pau',
    },

    {
      id: 2,
      title: 'Travel',
      description: 'Bali',
      imageUrl: 'assets/img/Travel.avif',
      createdDate: new Date(),
      snaps: 150,
    },

    {
      id: 3,
      title: 'Road Trip',
      description: 'Desert',
      imageUrl: 'assets/img/roadtrip.png',
      createdDate: new Date(),
      snaps: 60,
      location: 'Australie',
    },
    {
      id: 4,
      title: 'Franck',
      description: 'Il nous surveille ! ',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 52,
      location: 'Pau',
    },

    {
      id: 5,
      title: 'Travel',
      description: 'Bali',
      imageUrl: 'assets/img/Travel.avif',
      createdDate: new Date(),
      snaps: 199,
    },

    {
      id: 6,
      title: 'Road Trip',
      description: 'Desert',
      imageUrl: 'assets/img/roadtrip.png',
      createdDate: new Date(),
      snaps: 22,
      location: 'Australie',
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
        throw new Error('FaceSnap not found!');
    } else {
        return faceSnap
    }
}

  snapFaceSnapById(faceSnapId : number, snapType: 'snap' | 'unsnap'): void {
     const faceSnap = this.getFaceSnapById(faceSnapId);
     snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }
  }

 

