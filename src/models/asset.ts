import sequelize from '@/loaders/sequelize';
import { DataTypes, Model } from 'sequelize';
import { IAsset } from '@/interfaces/IAsset';

export interface AssetInstance extends Model<IAsset>, IAsset {}

const Asset = sequelize.define<AssetInstance>(
  'asset',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    family_id: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    tableName: 'assets',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    paranoid: false,
  },
);

export default Asset;
