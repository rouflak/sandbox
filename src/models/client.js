// Libs
////////////////////////////////
import Sequelize from 'sequelize';
import _ from 'lodash';

// Models
////////////////////////////////
import { base, baseAssociate } from './base';
import user from './user';
import project from './project';
import db from '../db';

const client = db.define('client', {
  ...base,
  name: {
    type: Sequelize.STRING(255),
    validation: (value) => {
      if (_.isUndefined(value) || _.isNull(value) || value === '') {
        throw new Error('"name" must be a valid string');
      }
    }
  }
});

baseAssociate(client);

export default client;
