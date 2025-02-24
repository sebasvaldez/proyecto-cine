import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const isAuth = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "No autorizado 1" });
  }

  jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ message: "No autorizado 2" });
    }

    req.userId = decoded.id;
    next();
  });
};
