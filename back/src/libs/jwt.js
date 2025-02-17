import jwt from "jsonwebtoken";

export const createAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, "A la grande le puse Kuka", { expiresIn: "1d" }, (err,token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};
