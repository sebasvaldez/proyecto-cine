import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";

export const login = (req, res) => {
  const { email, password } = req.body;

  try {
  } catch (error) {}
};
export const logOut = (req, res) => {};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });
    return res.json({ token: token });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al registrar usuario");
  }
};

export const profile = (req, res) => {
  res.send("Obteniendo el perfil del usuario");
};
