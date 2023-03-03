import {firestore} from 'firebase-admin';

export interface Trip {
  id: string;
  departureCityId: string;
  arrivalCityId: string;

  createdAt: firestore.Timestamp;
  updatedAt: firestore.Timestamp;
}

export type FirebaseTrip = Omit<Trip, 'id'>;
