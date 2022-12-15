import { IUser } from '@/interfaces/IUser';
import User from '@/models/user';
import Family from '@/models/family';
import Asset from '@/models/asset';

declare global {
  namespace Express {
    export interface Request {
      currentUser: IUser;
    }
  }

  namespace Models {
    export type UserModel = typeof User;
    export type FamilyModel = typeof Family;
    export type AssetModel = typeof Asset;
  }
}
