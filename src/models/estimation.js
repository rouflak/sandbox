// Libs
////////////////////////////////
import Sequelize from 'sequelize';
import _ from 'lodash';

// Models
////////////////////////////////
import { base, baseAssociate } from './base';
import db from '../db';

const estimation = db.define('estimation', {
  ...base,
  title: {
    type: Sequelize.STRING,
    validate: (value) => {
      if (_.isUndefined(value) || _.isNull(value) || value === '') {
        throw new Error('"title" must be a valid string');
      }
    }
  },
  description: Sequelize.TEXT
});

baseAssociate(estimation);

export default estimation
