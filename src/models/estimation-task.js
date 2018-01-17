// Libs
////////////////////////////////
import Sequelize from 'sequelize';
import _ from 'lodash';

// Models
////////////////////////////////
import { base, baseAssociate } from './base';
import db from '../db';

const estimationTask =  db.define('estimation_task', {
  ...base,
  cost: {
    type: Sequelize.STRING,
    validate: (value) => {
      if (_.isUndefined(value) || _.isNull(value)) {
        throw new Error('"cost" is mandatory');
      }
    }
  },
  description: Sequelize.TEXT
});

baseAssociate(estimationTask);

export default estimationTask;
