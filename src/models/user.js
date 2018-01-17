// Libs
////////////////////////////////
import Sequelize from 'sequelize';
import _ from 'lodash';

// Models
////////////////////////////////
import { base, baseAssociate } from './base';
import db from '../db';

const user = db.define('user', {
  ...base,
  firstname: {
    type: Sequelize.STRING(255),
    validation: (value) => {
      if (_.isUndefined(value) || _.isNull(value) || value === '') {
        throw new Error('"firstname" must be a valid string');
      }
    }
  },
  lastname: {
    type: Sequelize.STRING(255),
    validation: (value) => {
      if (_.isUndefined(value) || _.isNull(value) || value === '') {
        throw new Error('"lastname" must be a valid string');
      }
    }
  },
  function: Sequelize.STRING(255)
});

user.belongsTo(
  user,
  {
    foreignKey: 'createdBy'
  }
);

user.belongsTo(
  user,
  {
    foreignKey: 'updatedBy'
  }
);

export default user;
