import * as models from '../models';

const getModel = (modelName) => {
  const model = models[modelName];
  if (!model) {
    throw `Could not find model with name ${modelName}`
  }

  return model;
}

export const loadEntityById = async (modelName, id) => {
  const model = getModel(modelName);
  const instance = await model.findById(id);

  if (!instance) {
    throw `Could not find ${modelName} with id ${id}`
  }

  return instance;
}

export const loadEntitiy = async (modelName, { where, include, limit, offset }) => {
  const model = getModel(modelName);

  const instances = await model.findOne({
    where,
    include,
    limit,
    offset
  });

  if (!instance) {
    throw `Could not find ${modelName}`;
  }

  return instance;
}

export const loadEntities = async (modelName, { where, include, limit, offset }) => {
  const model = getModel(modelName);

  const instances = await model.findAll({
    where,
    include,
    limit,
    offset
  });

  if (!instances) {
    throw `Could not find ${modelName}s`;
  }

  return instances;
}
