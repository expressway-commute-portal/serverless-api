import {firestore} from 'firebase-admin';

export interface City {
  id: string;
  name: string;

  createdAt: firestore.Timestamp;
  updatedAt: firestore.Timestamp;
}

export type FirebaseCity = Omit<City, 'id'>;
