import * as admin from 'firebase-admin';
import migrationAPI from './domain/migration';
import {renameCity} from './domain/trip/renameCity.function';
import {createUser} from './domain/auth/createUser.function';

admin.initializeApp();

exports.migration = {
  api: migrationAPI,
};

exports.trip = {
  renameCity: renameCity,
};

exports.auth = {
  createUser: createUser,
};
