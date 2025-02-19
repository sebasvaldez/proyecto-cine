import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "No autorizado 1" });
  }

  jwt.verify(token, "alagrandelepusecuca2025", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "No autorizado 2" });
    }

    req.userId = decoded.id;
    next();
  });
};
