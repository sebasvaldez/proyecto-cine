import { useForm } from "react-hook-form";
import { ButtonMUI, InputMUI, FormMUI, BoxMUI } from "../../ui";
import { useNavigate, Link } from "react-router-dom";
import { FormControl, Typography } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, isLoading, user } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const userData= await login(data.email, data.password);

    if (userData) {
      navigate("/dashboard");
    }
  });
  return (
    <BoxMUI>
      <Typography variant="h6" textAlign={"center"}>
        Ingreso solo a personal autorizado
      </Typography>
      <FormMUI onSubmit={onSubmit}>
        <FormControl
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <InputMUI
            label="Email"
            type="email"
            name="email"
            {...register("email", { required: true })}
          />
          <InputMUI
            label="Password"
            type="password"
            name="password"
            {...register("password", { required: true })}
          />
          <ButtonMUI type="submit">Ingresar</ButtonMUI>
        </FormControl>
      </FormMUI>
    </BoxMUI>
  );
};
