import { IUser } from '@/interfaces/IUser';
import User from '@/models/user';

declare global {
  namespace Express {
    export interface Request {
      currentUser: IUser;
    }
  }

  namespace Models {
    export type UserModel = typeof User;
  }
}
