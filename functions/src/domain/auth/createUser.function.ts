import {auth} from 'firebase-functions';
import * as admin from 'firebase-admin';
import {FirestoreCollections} from '../../model';
import {Logger} from '../../util/custom.logger';

const logger = new Logger('Create User Function');

export const createUser = auth.user().onCreate(async user => {
  logger.info('User created in Firebase Auth', user.uid);
  logger.debug('User', user);

  const reference = await admin.firestore().collection(FirestoreCollections.User).add({
    uid: user.uid,
    role: 'USER',
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  logger.info('User created in Firebase Firestore', reference.id);
});
