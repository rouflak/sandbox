// Libs
////////////////////////////////
import Sequelize from 'sequelize';
import _ from 'lodash';

// Models
////////////////////////////////
import { base, baseAssociate } from './base';
import db from '../db';

const task = db.define('task', {
  ...base,
  name: {
    type: Sequelize.STRING,
    validate: (value) => {
      if (_.isUndefined(value) || _.isNull(value) || value === '') {
        throw new Error('"name" must be a valid string');
      }
    }
  },
  description: Sequelize.TEXT
});

baseAssociate(task);

export default task;
