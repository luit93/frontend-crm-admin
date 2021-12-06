import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../profile/adminUserAction";
import { CustomInput } from "../../components/custm input/CustomInput";
import {
  BtnPrimary,
  BtnOutline,
} from "../../components/custom-botton/BtnPrimary";
import { useNavigate } from "react-router-dom";
const initialState = {
  email: "neil@luit.com",
  password: "mmmmmmml",
};
const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState(initialState);
  const admin = useSelector((state) => state.admin);

  useEffect(() => {
    admin?.isAuth && navigate("/dashboard");
  }, [admin, navigate]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // adminLogin(loginInfo);
    dispatch(adminLogin(loginInfo));
  };
  const inputFields = [
    {
      label: "Email",
      type: "text",
      name: "email",
      value: loginInfo.email,
      onChange: handleOnChange,
      required: true,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      value: loginInfo.password,
      onChange: handleOnChange,
      required: true,
    },
  ];
  return (
    <div className="login-page">
      <div className="login-form">
        <h3>Log in</h3>
        <div className="input-fields">
          <form onSubmit={handleOnSubmit}>
            {inputFields.map((row, i) => (
              <CustomInput key={i} {...row} />
            ))}
            <div className="form-bottom">
              <BtnPrimary text="Login" />
            </div>
            <div className="form-bottom text-end">
              New here? <a href="/register">Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
