import {
    InferAttributes,
    InferCreationAttributes,
    Model,
    CreationOptional,
  } from "sequelize";
  
  export interface Count
    extends Model<InferAttributes<Count>, InferCreationAttributes<Count>> {
    id: CreationOptional<number>;
    userId?: number;
    movieId?: number;
    createdAt?: Date;
    updatedAt?: Date;
  }
  