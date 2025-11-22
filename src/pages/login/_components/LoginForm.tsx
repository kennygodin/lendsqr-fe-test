import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchemaType } from "@/schemas/auth.schema";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchemaType) => {
    console.log(data);
    navigate("/users");
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-items">
        <input placeholder="Email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div className="form-items">
        <div className="password-wrapper">
          <input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
          />

          <button
            type="button"
            className="toggle-btn"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "HIDE" : "SHOW"}
          </button>
        </div>

        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <p className="forgot">Forgot PASSWORD?</p>

      <button type="submit" className="submit">
        Log in
      </button>
    </form>
  );
}
