// Libs
////////////////////////////////
import Sequelize from 'sequelize';
import _ from 'lodash';

// Models
////////////////////////////////
import { base, baseAssociate } from './base';
import db from '../db';

const quote = db.define('quote', {
  ...base,
  ref: {
    type: Sequelize.STRING(12),
    unique: true
  },
  name: Sequelize.STRING(255),
  description: Sequelize.TEXT
});

baseAssociate(quote);

export default quote;
