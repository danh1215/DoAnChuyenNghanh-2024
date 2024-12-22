import CommentModel from "./comment.model";
import FavoriteModel from "./favorite.model";
import MovieModel from "./movie.model";
import RatingModel from "./rating.model";
import UserModel from "./user.model";
import CountModel from "./count.model";

export { default as CommentModel } from "./comment.model";
export { default as FavoriteModel } from "./favorite.model";
export { default as MovieModel } from "./movie.model";
export { default as RatingModel } from "./rating.model";
export { default as UserModel } from "./user.model";
export { default as CountModel } from "./count.model";

// Establish relationships between User, Comment, and Movie.
UserModel.hasMany(CommentModel);
CommentModel.belongsTo(UserModel, {
  foreignKey: "userId",
});

MovieModel.hasMany(CommentModel);
CommentModel.belongsTo(MovieModel, {
  foreignKey: "movieId",
});

// Establish relationships between User, Count, and Movie.
UserModel.hasMany(CountModel);
CountModel.belongsTo(UserModel, {
  foreignKey: "userId",
});

MovieModel.hasMany(CountModel);
CountModel.belongsTo(MovieModel, {
  foreignKey: "movieId",
});

// Establish relationships between User, Comment, and Favorite.
UserModel.hasMany(FavoriteModel);
FavoriteModel.belongsTo(UserModel, {
  foreignKey: "userId",
});

MovieModel.hasMany(FavoriteModel);
FavoriteModel.belongsTo(MovieModel, {
  foreignKey: "movieId",
});

// Establish relationships between User, Comment, and Rating.
UserModel.hasMany(RatingModel);
RatingModel.belongsTo(UserModel, {
  foreignKey: "userId",
});

MovieModel.hasMany(RatingModel);
RatingModel.belongsTo(MovieModel, {
  foreignKey: "movieId",
});

UserModel.sync({
  // keep
});

CommentModel.sync({
  // keep
});

FavoriteModel.sync({
  // keep
});
MovieModel.sync({
  // keep
});
RatingModel.sync({
  // keep
});

CountModel.sync({
  // keep
});
