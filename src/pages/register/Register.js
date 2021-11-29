import React, { useState } from "react";
import { CustomInput } from "../../components/custm input/CustomInput";
import { BtnOutline } from "../../components/custom-botton/BtnPrimary";
import { toast } from "react-toastify";
import { apiRegister } from "../../apis/registerApi";

const initialState = {
  first: "",
  last: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};
const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const [isPending, setIsPending] = useState(false);
  const [passError, setPassError] = useState("");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    const { confirmPassword, ...rest } = formData;
    const result = await apiRegister(rest);

    console.log(result, ">>>>");

    if (result.status === "success") {
      console.log(result.status);
      toast.success(result.message);
      setFormData(initialState);
    } else {
      toast.error(result.message);
    }
    setIsPending(false);
  };
  const handleOnBlur = (e) => {
    const { password, confirmPassword } = formData;
    let error = "";
    if (password !== confirmPassword) {
      error = "passwords must match";
    }
    error && toast(error);
    error = "";
  };
  const inputFields = [
    { label: "First", type: "text", name: "first" },
    { label: "Last", type: "text", name: "last" },
    { label: "Email", type: "email", name: "email" },
    { label: "phone", type: "number", name: "phone" },
    {
      label: "Password",
      type: "password",
      name: "password",
    },
    {
      label: "Confirm Password",
      type: "password",
      name: "confirmPassword",
      onBlur: handleOnBlur,
    },
  ];
  return (
    <div className="login-page">
      <div className="login-form">
        <h3>Register</h3>
        <div className="input-fields">
          {isPending && "please wait ..."}
          <form onSubmit={handleOnSubmit}>
            {inputFields.map((row, i) => (
              <CustomInput key={i} {...row} onChange={handleOnChange} />
            ))}
            {passError && <div></div>}
            <div className="form-bottom">
              <BtnOutline
                text="Register"
                disabled={formData.password !== formData.confirmPassword}
              />
            </div>
            <div className="form-bottom text-end">
              Already have an account <a href="/login">Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
