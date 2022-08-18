import jwt from "jsonwebtoken";
import { createError } from "./error.js";

// verifyToken middleware

// verify our authentication
export const verifyToken = (req, res, next) => {
  // take our token from our cookies
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "Youre not authenticated."));
  }

  // if token cookie & env.jwt same, return err or user
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is invalid"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  // ' () => ' this is callback func
  //   not use 'next' because its gonna to users's root again(?)
  verifyToken(req, res, next, () => {
    // if user.id and also user.isAdmin can delete this users
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "you are not authorized"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(402, "youre not admin"));
    }
  });
};
