import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
      private reservationService: ReservationService,
      private router: Router,
      private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    


    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });

    // Get the id from the route parameter, activateRoute is an Angular 
    // service that provides access to the route parameters
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    // If the id exists, get the reservation from the service and populate the form
    if (id) {
      let reservation = this.reservationService.getReservation(id);

      // If the reservation exists, patch the form with the reservation data
      if (reservation) {
        this.reservationForm.patchValue(reservation);
      }
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;

      // Get the id from the route parameter
      const id = this.activatedRoute.snapshot.paramMap.get('id');
    
      // if the id exists, update the reservation, otherwise add a new reservation
      if (id) {
        this.reservationService.updateReservation(id, reservation);
      } else {
        this.reservationService.addReservation(reservation);
      }
    }
    this.router.navigate(['/list']);
 }
}
