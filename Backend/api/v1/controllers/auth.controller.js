import UserDAO from "../../../dao/userDAO.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";

export default class AuthController {
  static generateAccessToken = (user) => {
    return jwt.sign(
      {
        _id: user._id,
        admin: user.admin,
      },
      process.env.JWT_ACCESS_KEY,
      {
        expiresIn: process.env.JWT_ACCESS_KEY_EXPIRE,
      }
    );
  };

  static generateRefreshToken = (user) => {
    return jwt.sign(
      {
        _id: user._id,
        admin: user.admin,
      },
      process.env.JWT_REFRESH_KEY,
      {
        expiresIn: process.env.JWT_REFRESH_KEY_EXPIRE,
      }
    );
  };

  static signup = async (req, res, next) => {
    // create new user
    let newUser = {
      ...req.body.newUser,
      admin: false,
      refreshToken: "",
      history_location_ids: []
    };
    
    // check user unique
    let unique = await UserDAO.checkUnique({
      email: { $eq: newUser.email },
    });
    // user is not unique
    if (!unique)
      return res.status(403).json({ message: "not unique email" });
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newUser.password, salt);
    newUser.password = hashedPassword;
    // insert new user into DB
    await UserDAO.insertNewUser(newUser);
    return res.status(201).json({ message: "signup success" });
  };

  static login = async (req, res, next) => {
    let user = {
      ...req.body.user,
    };
    // check user exist
    let unique = await UserDAO.checkUnique({
      email: { $eq: user.email },
    });
    // user does not exist
    if (unique)
      return res.status(403).json({ message: "email does not exist" });
    // check password
    const storedUser = await UserDAO.getUser({
      email: { $eq: user.email },
    });
    const { password: hashedPassword, refreshToken, ...others } = storedUser["_doc"];
    let compare = await bcrypt.compare(user.password, hashedPassword);
    // wrong password
    if (!compare) return res.status(403).json({ message: "incorrect password" });
    // correct password and exist user
    if (!unique && compare) {
      const refreshToken = this.generateRefreshToken(storedUser);
      let result = await UserDAO.updateRefreshToken(storedUser, refreshToken);
      await res.cookie("refreshToken", refreshToken, {
        "HttpOnly": false
      });
      const accessToken = this.generateAccessToken(storedUser);
      await res.cookie("accessToken", accessToken, {
        "HttpOnly": false
      });
      let returnData = {
        email: others.email,
        fullname: others.fullname,
        age: others.age,
        history_location_ids: others.history_location_ids,
        createdAt: others.createdAt,
        updatedAt: others.updatedAt,
      }
      return res.status(201).json({ message: "login success", data: returnData });
    };
  };

  static refreshTokens = async (req, res, next) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) return res.status(401).json({ message: "unauthorized" });
    
    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, async (err, user) => {
      if (err) return res.status(403).json({ message: "invalid token" });
        const storedRefreshToken = await UserDAO.getRefreshToken(user);
        if (!refreshToken == storedRefreshToken)
          return res.status(403).json({ message: "invalid token" });

        const newAccessToken = this.generateAccessToken(user);
        const newRefreshToken = this.generateRefreshToken(user);
        await UserDAO.updateRefreshToken(user, newRefreshToken);
        await res.cookie("refreshToken", newRefreshToken, {
          "HttpOnly": false
        });

        await res.cookie("accessToken", newAccessToken, {
          "HttpOnly": false
        });

        res.status(200).json({ data: user, message: "refresh tokens success" });
    });
  };

  static logout = async (req, res, next) => {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    let result = await UserDAO.updateRefreshToken(req.user, "");

    res.status(200).json({ message: "logout success" });
  };

  static getUser = async (req, res, next) => {
    let userId = ObjectId(req.user._id)
    let userData = {}
 
    if (userId) {
      const storedUser = await UserDAO.getUser({
        _id: { $eq: ObjectId(userId) },
      });
      const { password: hashedPassword, refreshToken, ...others } = storedUser["_doc"];
      userData = {
        email: others.email,
        fullname: others.fullname,
        age: others.age,
        history_location_ids: others.history_location_ids,
        createdAt: others.createdAt,
        updatedAt: others.updatedAt,
      };
    } else {
      return res.status(401).json({ message: "unauthorized", data: userData });
    };
    res.status(200).json({ message: "get user success", data: userData });
  };
};
