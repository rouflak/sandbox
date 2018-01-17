import client from './client';
import comment from './comment';
import estimationTask from './estimation-task';
import estimation from './estimation';
import invoice from './invoice';
import projectUser from './project-user';
import project from './project';
import quoteTask from './quote-task';
import quote from './quote';
import taskType from './task-type';
import task from './task';
import user from './user';

project.belongsTo(
  client,
  { as: 'client' }
);

client.hasMany(
  project,
  { as: 'projects' }
);

// project.belongsToMany(
//   user,
//   {
//     through: {
//       model: projectUser,
//       as: 'projectUser'
//     },
//     as: 'users'
//   }
// );

// user.belongsToMany(
//   project,
//   {
//     through: {
//       model: projectUser,
//       as: 'projectUser'
//     },
//     as: 'projects'
//   }
// );

// invoice.belongsTo(
//   project,
//   { as: 'project' }
// )

// project.hasMany(
//   invoice,
//   { as: 'invoices' }
// );

// quote.belongsTo(
//   project,
//   { as: 'project' }
// );

// project.hasMany(
//   quote,
//   { as: 'quote' }
// );

// estimation.belongsTo(
//   project,
//   { as: 'project' }
// );

// project.hasMany(
//   estimation,
//   { as: 'estimations' }
// );

// task.belongsToMany(
//   estimation,
//   {
//     through: {
//       model: estimationTask,
//       as: 'estimationTask'
//     },
//     as: 'estimations'
//   }
// );

// estimation.belongsToMany(
//   task,
//   {
//     through: {
//       model: estimationTask,
//       as: 'estimationTask'
//     },
//     as: 'tasks'
//   }
// );

// task.belongsTo(
//   taskType,
//   { as: 'taskType' }
// );

// taskType.hasMany(
//   task,
//   { as: 'taskTypes' }
// );

// task.belongsTo(
//   user,
//   { as: 'assignee' }
// );

// user.hasMany(
//   task,
//   { as: 'tasks' }
// )

// task.belongsTo(
//   task,
//   { as: 'parent' }
// );

// task.hasMany(
//   task,
//   { as: 'subTasks' }
// );

// task.belongsToMany(
//   quote,
//   {
//     through: {
//       model: quoteTask,
//       as: 'quoteTask'
//     },
//     as: 'quotes'
//   }
// );

// quote.belongsToMany(
//   task,
//   {
//     through: {
//       model: quoteTask,
//       as: 'quoteTask'
//     },
//     as: 'tasks'
//   }
// );

// comment.belongsTo(
//   estimation,
//   { as: 'estimation' }
// );

// estimation.hasMany(
//   comment,
//   { as: 'comments' }
// );

// comment.belongsTo(
//   comment,
//   { as: 'parent' }
// );

// comment.hasMany(
//   comment,
//   { as: 'children' }
// );

// comment.belongsTo(
//   user,
//   { as: 'from' }
// );

// user.hasMany(
//   comment,
//   { as: 'comments' }
// );

// comment.belongsTo(
//   user,
//   { as: 'to' }
// );

// user.belongsTo(
//   comment,
//   { as: 'messages' }
// );



export {
  client,
  comment,
  estimationTask,
  estimation,
  invoice,
  projectUser,
  project,
  quoteTask,
  quote,
  taskType,
  task,
  user
}
