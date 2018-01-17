// Libs
////////////////////////////////
import Sequelize from 'sequelize';

// Models
////////////////////////////////
import User from './user';

const base = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
};

const baseAssociate = (entity) => {
  entity.belongsTo(
    User,
    {
      foreignKey: 'createdBy',
    }
  )

  entity.belongsTo(
    User,
    {
      foreignKey: 'updatedBy',
    }
  )
}

export { baseAssociate, base };
