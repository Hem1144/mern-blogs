import { RequestHandler } from "express";
import createHttpError from "http-errors";
import UserModel from "../models/user";
import bcrypt from "bcrypt";

interface SignUpBody {
  usename?: string;
  email: string;
  password: string;
}

export const signUp: RequestHandler<
  unknown,
  unknown,
  SignUpBody,
  unknown
> = async (req, res, next) => {
  const username = req.body.usename;
  const email = req.body.email;
  const passwordRaw = req.body.password;

  try {
    if (!username || !email || !passwordRaw) {
      throw createHttpError(400, "Parameters messing");
    }

    const existUsername = await UserModel.findOne({
      username: username,
    }).exec();

    if (existUsername) {
      throw createHttpError(409, "Username alread exists");
    }

    const existEmail = await UserModel.findOne({ email: email }).exec();

    if (existEmail) {
      throw createHttpError(409, "Email alread exists");
    }

    const passwordHash = await bcrypt.hash(passwordRaw, 10);

    const newUser = await UserModel.create({
      username: username,
      email: email,
      password: passwordHash,
    });

    res.send(201).json(newUser);
  } catch (error) {
    next();
  }
};
