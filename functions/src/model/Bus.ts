import {firestore} from 'firebase-admin';

export interface Bus {
  id: string;
  number: string;

  createdAt: firestore.Timestamp;
  updatedAt: firestore.Timestamp;
}

export type FirebaseBus = Omit<Bus, 'id'>;
