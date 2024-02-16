import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) { }

  // This method is called when the component is created
  // ReservationService is injected into the component
  // Services are a way to encapsulate functionality that is common to multiple components
  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }
  

  deleteReservation(id: string): void {
    this.reservationService.deleteReservation(id);
    this.reservations = this.reservationService.getReservations();
  }

  editReservation(id: string): void {
    console.log("EDIT RESERVATION: ", id)
  }
}
