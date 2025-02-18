import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("Usuario no encontrado");
    } else {
      const matchPassword = await bcrypt.compare(password, user.password);
      if (!matchPassword) {
        return res.status(400).send("Contraseña incorrecta");
      } else {
        const token = await createAccessToken({ id: user._id });
        res.cookie("token", token, {
          httpOnly: true,
          sameSite: "none",
          secure: true,
          maxAge: 24 * 60 * 60, // 1 day
        });
        res.json(user);
      }
    }
  } catch (error) {}
};
export const logOut = (req, res) => {
  
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });
    // return res.json({ token: token });

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 24 * 60 * 60, // 1 day
    });
    res.json(userSaved);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al registrar usuario");
  }
};

export const profile = (req, res) => {
  res.send("Obteniendo el perfil del usuario");
};
