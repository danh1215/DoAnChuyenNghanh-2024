import { RequestHandler } from "express";
import { CountModel } from "../models";
import { sendResponse } from "../utils";

const getCount: RequestHandler<any, any, unknown, unknown> = async (
  req,
  res,
  next
) => {
  try {
    const { movieId } = req.params;
    const userId = req.user.id;
    const views = await CountModel.findAll({
      where: {
        userId,
        movieId,
      },
    });

    return sendResponse(res, {
      code: 200,
      status: "Success",
      data: views.length ? views.length : 0,
    });
  } catch (error) {
    next(error);
  }
};

const createCount: RequestHandler<any, any, unknown, unknown> = async (
  req,
  res,
  next
) => {
  try {
    const { movieId } = req.params;
    const userId = req.user.id;

    const view = await CountModel.sync({ alter: true }).then(() => {
      return CountModel.create({
        movieId,
        userId,
      });
    });

    return sendResponse(res, {
      code: 200,
      status: "Success",
      data: view,
    });
  } catch (error) {
    next(error);
  }
};

const CountController = {
  getCount,
  createCount,
};

export default CountController;
