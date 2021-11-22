import React from "react";
import { CustomInput } from "../../components/custm input/CustomInput";
import { BtnOutline } from "../../components/custom-botton/BtnPrimary";

const Register = () => {
  const inputFields = [
    { label: "First", type: "text", name: "first" },
    { label: "Last", type: "text", name: "last" },
    { label: "Email", type: "email", name: "email" },
    { label: "phone", type: "number", name: "phone" },
    { label: "Password", type: "password", name: "password" },
    { label: "Confirm Password", type: "password", name: "confirm password" },
  ];
  return (
    <div className="login-page">
      <div className="login-form">
        <h3>Register</h3>
        <div className="input-fields">
          <form>
            {inputFields.map((row, i) => (
              <CustomInput key={i} {...row} />
            ))}
            <div className="form-bottom">
              <BtnOutline text="LogRegisterin" />
            </div>
            <div className="form-bottom text-end">
              Old here? <a href="/">Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
