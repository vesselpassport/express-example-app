import { User } from './src/types/user';

declare module 'express' {
  export interface Request {
    user?: User;
  }
}
