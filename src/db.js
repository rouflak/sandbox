import Sequelize from 'sequelize';

const db = new Sequelize('pm', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;
