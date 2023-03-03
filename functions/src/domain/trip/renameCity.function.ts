import {firestore} from 'firebase-functions';
import * as admin from 'firebase-admin';
import {FirestoreCollections} from '../../model';
import {findAllByCityId} from '../../service/trip.service';
import {Logger} from '../../util/custom.logger';

const logger = new Logger('Rename City Function');

export const renameCity = firestore
  .document(`${FirestoreCollections.City}/{cityId}`)
  .onUpdate(async (change, context) => {
    const cityId = context.params.cityId;
    logger.info('City id', cityId);

    const newValue = change.after.data();
    logger.debug('New value', newValue);

    const departureCityTrips = await findAllByCityId(cityId, 'departureCity');
    logger.debug('Departure city trips', departureCityTrips);

    const arrivalCityTrips = await findAllByCityId(cityId, 'arrivalCity');
    logger.debug('Arrival city trips', arrivalCityTrips);

    await admin.firestore().runTransaction(async transaction => {
      departureCityTrips.forEach(trip => {
        const documentRef = admin.firestore().collection(FirestoreCollections.Trip).doc(trip.id);
        transaction.update(documentRef, {
          'departureCity.name': newValue.name,
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        });
      });

      arrivalCityTrips.forEach(trip => {
        const documentRef = admin.firestore().collection(FirestoreCollections.Trip).doc(trip.id);
        transaction.update(documentRef, {
          'arrivalCity.name': newValue.name,
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        });
      });
    });
    logger.info('Transaction completed');
  });
