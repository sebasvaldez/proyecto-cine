import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

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
          httpOnly: false,
          sameSite: "none",
          secure: true,
          maxAge: 24 * 60 * 60 * 1000, //
        });
        res.json(user);
      }
    }
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
export const logOut = async (req, res) => {
  res.clearCookie("token", "");
  res.send("Sesión cerrada");
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });

    if (userFound) {
      return res.status(400).json({ message: ["El email ya esta registrado"] });
    }

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

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  console.log(token);
  if (!token) return res.status(400).send("No hay token");
  try {
    jwt.verify(token, TOKEN_SECRET,async (err, decoded) => {
      if (err) {
        console.log(err);
        return res.status(401).json({ message: "No autorizado 2" });
      }
      
      const user= await User.findById(decoded.id);
      if (!user) {
        return res.status(404).send("Usuario no encontrado");
      }
      return res.json({
        name: user.name,
        email: user.email,
        _id: user._id
      });


    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (req, res) => {
  try {
  } catch (error) {}
};
