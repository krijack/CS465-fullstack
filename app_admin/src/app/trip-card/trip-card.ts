import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css',
})
export class TripCardComponent {
  @Input() trip!: { code: string; name: string; length: string; price: number };
}
