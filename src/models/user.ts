import { IUser } from '@/interfaces/IUser';
import sequelize from '@/loaders/sequelize';
import { DataTypes, Model } from 'sequelize';

export interface UserInstance extends Model<IUser>, IUser {}

const User = sequelize.define<UserInstance>(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    salt: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    paranoid: false,
  },
);

export default User;
