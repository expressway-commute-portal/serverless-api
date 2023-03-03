import {firestore} from 'firebase-admin';

export interface Bus {
  id: string;
  uid: string;
  role: 'admin' | 'user';

  createdAt: firestore.Timestamp;
  updatedAt: firestore.Timestamp;
}

export type FirebaseBus = Omit<Bus, 'id'>;
