import {firestore} from 'firebase-admin';

export interface Schedule {
  id: string;
  departureTime: firestore.Timestamp;
  arrivalTime: firestore.Timestamp;
  tripId: string;
  busId: string;

  createdAt: firestore.Timestamp;
  updatedAt: firestore.Timestamp;
}

export type FirebaseSchedule = Omit<Schedule, 'id'>;
