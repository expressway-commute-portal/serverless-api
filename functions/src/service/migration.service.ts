import {Logger} from '../util/custom.logger';
import * as admin from 'firebase-admin';
import {FirestoreCollections} from '../model';

const logger = new Logger('Translate Service');

export const feedData = async () => {
  const kadawathaBus = admin.firestore().collection(FirestoreCollections.Bus).doc();
  logger.info('Kadawatha Bus Id', kadawathaBus.id);
  const badullaBus = admin.firestore().collection(FirestoreCollections.Bus).doc();
  logger.info('Badulla Bus Id', badullaBus.id);

  const makumbura = admin.firestore().collection(FirestoreCollections.City).doc();
  logger.info('makumbura Id', makumbura.id);
  const badulla = admin.firestore().collection(FirestoreCollections.City).doc();
  logger.info('badulla Id', badulla.id);
  const kadawatha = admin.firestore().collection(FirestoreCollections.City).doc();
  logger.info('kadawatha Id', kadawatha.id);
  const maharagama = admin.firestore().collection(FirestoreCollections.City).doc();
  logger.info('maharagama Id', maharagama.id);

  const maharagamaToKadawatha = admin.firestore().collection(FirestoreCollections.Trip).doc();
  const kadawathaToMaharagama = admin.firestore().collection(FirestoreCollections.Trip).doc();

  const makumburaToBadulla = admin.firestore().collection(FirestoreCollections.Trip).doc();
  const badullaToMakumbura = admin.firestore().collection(FirestoreCollections.Trip).doc();

  await Promise.all([
    admin
      .firestore()
      .collection(FirestoreCollections.Schedule)
      .add({
        tripId: maharagamaToKadawatha.id,
        busId: kadawathaBus.id,
        departureTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 8, 0)),
        arrivalTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 8, 40)),
        createdAt: admin.firestore.Timestamp.now(),
        updatedAt: admin.firestore.Timestamp.now(),
      }),
    admin
      .firestore()
      .collection(FirestoreCollections.Schedule)
      .add({
        tripId: maharagamaToKadawatha.id,
        busId: kadawathaBus.id,
        departureTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 9, 0)),
        arrivalTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 9, 40)),
        createdAt: admin.firestore.Timestamp.now(),
        updatedAt: admin.firestore.Timestamp.now(),
      }),
    admin
      .firestore()
      .collection(FirestoreCollections.Schedule)
      .add({
        tripId: maharagamaToKadawatha.id,
        busId: kadawathaBus.id,
        departureTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 10, 0)),
        arrivalTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 10, 40)),
        createdAt: admin.firestore.Timestamp.now(),
        updatedAt: admin.firestore.Timestamp.now(),
      }),

    admin
      .firestore()
      .collection(FirestoreCollections.Schedule)
      .add({
        tripId: kadawathaToMaharagama.id,
        busId: kadawathaBus.id,
        departureTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 15, 0)),
        arrivalTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 15, 40)),
        createdAt: admin.firestore.Timestamp.now(),
        updatedAt: admin.firestore.Timestamp.now(),
      }),
    admin
      .firestore()
      .collection(FirestoreCollections.Schedule)
      .add({
        tripId: kadawathaToMaharagama.id,
        busId: kadawathaBus.id,
        departureTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 16, 0)),
        arrivalTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 16, 40)),
        createdAt: admin.firestore.Timestamp.now(),
        updatedAt: admin.firestore.Timestamp.now(),
      }),
    admin
      .firestore()
      .collection(FirestoreCollections.Schedule)
      .add({
        tripId: kadawathaToMaharagama.id,
        busId: kadawathaBus.id,
        departureTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 17, 0)),
        arrivalTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 17, 40)),
        createdAt: admin.firestore.Timestamp.now(),
        updatedAt: admin.firestore.Timestamp.now(),
      }),

    admin
      .firestore()
      .collection(FirestoreCollections.Schedule)
      .add({
        tripId: makumburaToBadulla.id,
        busId: badullaBus.id,
        departureTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 18, 30)),
        arrivalTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 23, 30)),
        createdAt: admin.firestore.Timestamp.now(),
        updatedAt: admin.firestore.Timestamp.now(),
      }),
    admin
      .firestore()
      .collection(FirestoreCollections.Schedule)
      .add({
        tripId: makumburaToBadulla.id,
        busId: badullaBus.id,
        departureTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 22, 30)),
        arrivalTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 3, 30)),
        createdAt: admin.firestore.Timestamp.now(),
        updatedAt: admin.firestore.Timestamp.now(),
      }),
    admin
      .firestore()
      .collection(FirestoreCollections.Schedule)
      .add({
        tripId: makumburaToBadulla.id,
        busId: badullaBus.id,
        departureTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 16, 30)),
        arrivalTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 21, 0)),
        createdAt: admin.firestore.Timestamp.now(),
        updatedAt: admin.firestore.Timestamp.now(),
      }),

    admin
      .firestore()
      .collection(FirestoreCollections.Schedule)
      .add({
        tripId: badullaToMakumbura.id,
        busId: badullaBus.id,
        departureTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 9, 0)),
        arrivalTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 2, 0)),
        createdAt: admin.firestore.Timestamp.now(),
        updatedAt: admin.firestore.Timestamp.now(),
      }),
    admin
      .firestore()
      .collection(FirestoreCollections.Schedule)
      .add({
        tripId: badullaToMakumbura.id,
        busId: badullaBus.id,
        departureTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 10, 30)),
        arrivalTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 3, 30)),
        createdAt: admin.firestore.Timestamp.now(),
        updatedAt: admin.firestore.Timestamp.now(),
      }),
    admin
      .firestore()
      .collection(FirestoreCollections.Schedule)
      .add({
        tripId: badullaToMakumbura.id,
        busId: badullaBus.id,
        departureTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 0, 45)),
        arrivalTime: admin.firestore.Timestamp.fromDate(new Date(2020, 0, 1, 5, 0)),
        createdAt: admin.firestore.Timestamp.now(),
        updatedAt: admin.firestore.Timestamp.now(),
      }),
  ]);

  logger.info('Successfully added schedules');

  await Promise.all([
    maharagamaToKadawatha.set({
      departureCityId: maharagama.id,
      arrivalCityId: kadawatha.id,
      createdAt: admin.firestore.Timestamp.now(),
      updatedAt: admin.firestore.Timestamp.now(),
    }),
    kadawathaToMaharagama.set({
      departureCityId: kadawatha.id,
      arrivalCityId: maharagama.id,
      createdAt: admin.firestore.Timestamp.now(),
      updatedAt: admin.firestore.Timestamp.now(),
    }),
    makumburaToBadulla.set({
      departureCityId: makumbura.id,
      arrivalCityId: badulla.id,
      createdAt: admin.firestore.Timestamp.now(),
      updatedAt: admin.firestore.Timestamp.now(),
    }),
    badullaToMakumbura.set({
      departureCityId: badulla.id,
      arrivalCityId: makumbura.id,
      createdAt: admin.firestore.Timestamp.now(),
      updatedAt: admin.firestore.Timestamp.now(),
    }),

    kadawathaBus.set({
      name: 'Kadawatha Highway Express',
      createdAt: admin.firestore.Timestamp.now(),
      updatedAt: admin.firestore.Timestamp.now(),
    }),
    badullaBus.set({
      name: 'Badulla Highway Express',
      createdAt: admin.firestore.Timestamp.now(),
      updatedAt: admin.firestore.Timestamp.now(),
    }),

    makumbura.set({
      name: 'Makumbura',
      createdAt: admin.firestore.Timestamp.now(),
      updatedAt: admin.firestore.Timestamp.now(),
    }),
    kadawatha.set({
      name: 'Kadawatha',
      createdAt: admin.firestore.Timestamp.now(),
      updatedAt: admin.firestore.Timestamp.now(),
    }),
    maharagama.set({
      name: 'Maharagama',
      createdAt: admin.firestore.Timestamp.now(),
      updatedAt: admin.firestore.Timestamp.now(),
    }),
    badulla.set({
      name: 'Badulla',
      createdAt: admin.firestore.Timestamp.now(),
      updatedAt: admin.firestore.Timestamp.now(),
    }),
  ]);

  logger.info('Seeding completed successfully');
};

export const modifyPrices = async () => {
  const snapshot = await admin.firestore().collection('trip').get();
  await Promise.all(
    snapshot.docs.map(async doc => {
      await doc.ref.update({
        prices: [
          {
            price: doc.data().price,
            serviceType: 'Super Luxury',
          },
        ],
      });
    }),
  );
};
