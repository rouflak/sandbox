// Libs
////////////////////////////////
import Sequelize from 'sequelize';
import _ from 'lodash';

// Models
////////////////////////////////
import { base, baseAssociate } from './base';
import db from '../db';

const invoice = db.define('incoice', {
  ...base,
  ref: {
    type: Sequelize.STRING(12),
    unique: true
  }
});

baseAssociate(invoice);

export default invoice;
