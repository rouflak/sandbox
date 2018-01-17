// Libs
////////////////////////////////
import Sequelize from 'sequelize';
import _ from 'lodash';

// Models
////////////////////////////////
import { base, baseAssociate } from './base';
import client from './client';
import db from '../db';

const project = db.define('project', {
  ...base,
  name: {
    type: Sequelize.STRING(255),
    validation: (value) => {
      if (_.isUndefined(value) || _.isNull(value) || value === '') {
        throw new Error('"name" must be a valid string');
      }
    }
  },
  description: Sequelize.TEXT
});

baseAssociate(project);

export default project;
