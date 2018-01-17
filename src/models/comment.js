// Libs
////////////////////////////////
import Sequelize from 'sequelize';
import _ from 'lodash';

// Models
////////////////////////////////
import { base, baseAssociate } from './base';
import db from '../db';

const comment = db.define('comment', {
  ...base,
  content: {
    type: Sequelize.STRING,
    validate: (value) => {
      if (_.isUndefined(value) || _.isNull(value) || value === '') {
        throw new Error('"content" must be a valid string');
      }
    }
  }
});

baseAssociate(comment);

export default comment;
