import { Container } from 'typedi';
import { Logger } from 'winston';
import User from '@/models/user';

const attachCurrentUser = async (req, res, next) => {
  const Logger: Logger = Container.get('logger');
  try {
    const UserModel = Container.get('userModel') as typeof User;
    const userRecord = await UserModel.findByPk(req.token.id);
    if (!userRecord) {
      return res.sendStatus(401);
    }
    const currentUser = userRecord.get({ plain: true });
    Reflect.deleteProperty(currentUser, 'password');
    Reflect.deleteProperty(currentUser, 'salt');
    req.currentUser = currentUser;
    return next();
  } catch (e) {
    Logger.error('🔥 Error attaching user to req: %o', e);
    return next(e);
  }
};

export default attachCurrentUser;
