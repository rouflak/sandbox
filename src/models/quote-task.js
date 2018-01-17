// Libs
////////////////////////////////
import Sequelize from 'sequelize';
import _ from 'lodash';

// Models
////////////////////////////////
import { base, baseAssociate } from './base';
import db from '../db';

const quoteTask = db.define('quote_task', {
  ...base,
  cost: {
    type: Sequelize.DOUBLE,
    validate: (value) => {
      if (_.isUndefined(value) || _.isNull(value)) {
        throw new Error('"cost" is mandatory');
      }
    }
  }
});

 baseAssociate(quoteTask);

 export default quoteTask;
