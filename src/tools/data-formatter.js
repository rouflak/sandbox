export const commonAttributes = (entity, data) => ({
  id: entity.id,
  createdAt: entity.createdAt,
  updatedAt: entity.updatedAt,
  createdBy: entity.createdBy,
  updatedBy: entity.updatedBy,
  ...data
});
