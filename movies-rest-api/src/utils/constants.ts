import * as dotenv from "dotenv";
dotenv.config();

export enum TABLE_NAME {
  USERS = "users",
  MOVIES = "movies",
  COMMENTS = "comments",
  FAVORITES = "favorites",
  RATINGS = "ratings",
  COUNTS = "counts",
}

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;
