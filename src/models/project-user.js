// Libs
////////////////////////////////
import Sequelize from 'sequelize';
import _ from 'lodash';

// Models
////////////////////////////////
import { base, baseAssociate } from './base';
import db from '../db';

const projectUser = db.define('project_user', {
  ...base,
  role: {
    type: Sequelize.STRING(255),
    validation: (value) => {
      if (_.isUndefined(value) || _.isNull(value) || value === '') {
        throw new Error('"role" must be a valid string');
      }
    }
  },
  isOwner: Sequelize.BOOLEAN
});

baseAssociate(projectUser);

export default projectUser;
