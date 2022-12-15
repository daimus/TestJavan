import sequelize from '@/loaders/sequelize';
import { DataTypes, Model } from 'sequelize';
import { IFamily } from '@/interfaces/IFamily';

export interface FamilyInstance extends Model<IFamily>, IFamily {}

const Family = sequelize.define<FamilyInstance>(
  'family',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    parent_id: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sex: {
      type: DataTypes.ENUM,
      values: ['male', 'female'],
      allowNull: false,
    },
  },
  {
    tableName: 'families',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    paranoid: false,
  },
);

export default Family;
