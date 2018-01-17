import db from '../db';
import {
  user,
  // comment,
  // estimationTask,
  // estimation,
  // invoice,
  // projectUser,
  project,
  // quoteTaks,
  // quote,
  // taksType,
  // task,
  client
} from '../models';

const dropConstraints = database => {
  const queryInterface = database.getQueryInterface();
  return queryInterface.showAllTables()
    .then(tableNames => Promise.all(
      tableNames.map(
        tableName => queryInterface.showConstraint(tableName)
          .then(constraints => Promise.all(
            constraints.map(constraint => {
              if (constraint.constraintType === 'FOREIGN KEY') {
                return queryInterface.removeConstraint(tableName, constraint.constraintName);
              }
            })
          )
        )
      )
    )
  );
}

dropConstraints(db)
  .then(() => user.sync({ alter: true }))
  .then(() => client.sync({ alter: true }))
  .then(() => project.sync({ alter: true }))
  .then(() => process.exit(0))
  .catch(e => {
    console.error(e)
    process.exit(1)
  });

  // .then(() => comment.sync({ alter: true}))
  // .then(() => estimationTask.sync({ alter: true }))
  // .then(() => estimation.sync({ alter: true }))
  // .then(() => invoice.sync({ alter: true }))
  // .then(() => projectUser.sync({ alter: true }))
  // .then(() => quoteTaks.sync({ alter: true }))
  // .then(() => quote.sync({ alter: true }))
  // .then(() => taksType.sync({ alter: true }))
  // .then(() => task.sync({ alter: true }))
