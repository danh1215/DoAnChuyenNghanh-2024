import { DataTypes } from "sequelize";
import { connection } from "../config";
import { Count } from "../interfaces";
import { TABLE_NAME } from "../utils";

const CountModel = connection.define<Count>(TABLE_NAME.COUNTS, {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default CountModel;
