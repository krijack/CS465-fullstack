import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TripCardComponent } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
})
export class TripListingComponent {
  trips = [
    { code: 'TR001', name: 'Greece Adventure', length: '7 days', price: 1299 },
    { code: 'TR002', name: 'Japan Highlights', length: '10 days', price: 2199 },
    { code: 'TR003', name: 'Peru & Machu Picchu', length: '8 days', price: 1899 }
  ];
}
