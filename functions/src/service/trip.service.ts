import * as admin from 'firebase-admin';
import {FirestoreCollections} from '../model';
import {Trip} from '../model/Trip';
import {Logger} from '../util/custom.logger';

const logger = new Logger('Trip Service');

export const findAllByCityId = async (id: string, cityType: 'departureCity' | 'arrivalCity') => {
  const snapshot = await admin
    .firestore()
    .collection(FirestoreCollections.Trip)
    .where(`${cityType}.id`, '==', id)
    .get();

  if (snapshot.empty || snapshot.size === 0) {
    logger.info('No matching documents');
    return [];
  }
  return snapshot.docs.map(doc => ({...doc.data(), id: doc.id})) as Trip[];
};
