import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  console.log(req.userId);
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
          httpOnly: false,
          sameSite: "none",
          secure: false,
          maxAge: 24 * 60 * 60 * 1000, //
        });
        res.json(user);
      }
    }
  } catch (error) {}
};
export const logOut = async (req, res) => {
  res.clearCookie("token", "");
  res.send("Sesión cerrada");
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
      secure: false,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    res.json(userSaved);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "El email ya esta registrado" });
    }
  }
};

export const profile = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al obtener usuario");
  }
};

export const verifyToken= async (req, res) =>{
  const {token} = req.cookies;
  if(!token) return res.status(400).send("No hay token");
  try {
    jwt.verify(token, )
  } catch (error) {
    
  }



}





export const updateProfile = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}