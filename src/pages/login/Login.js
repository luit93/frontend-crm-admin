import React from "react";
import { CustomInput } from "../../components/custm input/CustomInput";
import {
  BtnPrimary,
  BtnOutline,
} from "../../components/custom-botton/BtnPrimary";

const Login = () => {
  const inputFields = [
    { label: "Email", type: "text", name: "email" },
    { label: "Password", type: "password", name: "password" },
  ];
  return (
    <div className="login-page">
      <div className="login-form">
        <h3>Log in</h3>
        <div className="input-fields">
          <form>
            {inputFields.map((row, i) => (
              <CustomInput key={i} {...row} />
            ))}
            <div className="form-bottom">
              <BtnPrimary text="Login" />
            </div>
            <div className="form-bottom text-end">
              New here? <a href="/">Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
