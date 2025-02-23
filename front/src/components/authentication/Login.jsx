import { useForm } from "react-hook-form";
import { ButtonMUI, InputMUI, FormMUI, BoxMUI } from "../../ui";

import { FormControl, Typography } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    const user = await login(data.email, data.password);
    // console.log(user);
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
