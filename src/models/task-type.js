// Libs
////////////////////////////////
import Sequelize from 'sequelize';
import _ from 'lodash';

// Models
////////////////////////////////
import { base, baseAssociate } from './base';
import db from '../db';

const taskType = db.define('task_type', {
  ...base,
  name: {
    type: Sequelize.STRING,
    validate: (value) => {
      if (_.isUndefined(value) || _.isNull(value) || value === '') {
        throw new Error('"name" must be a valid string');
      }
    }
  }
});

baseAssociate(taskType);

export default taskType;
