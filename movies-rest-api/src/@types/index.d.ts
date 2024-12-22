export interface User {
  id: number;
  role: any;
}
declare module "express-serve-static-core" {
  export interface Request {
    user: User;
  }
}
