import "./sign-up-page-style.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
/*api*/
import axios from "axios";
import { baseUrl } from "../../../api/baseUrl";
/*components*/
import TextBanner from "../../../Components/Banner.Component/text-banner";
import BrandImage from "../../../Components/Image.Components/brand-image/brand-image";
import TextInputOne from "../../../Components/Input.Component/text-input-one/text-input-one";
import ButtonStyleOne from '../../../Components/Button.Components/button-style-one/button-style-one'

export default function SignUpPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
      confirmPassword: confirmPassword,
      role: "USER",
    };

    try {
      if (password === confirmPassword) {
        const response = await axios.post(baseUrl + "/register", data);
        alert("Registration Successful");
        console.log(response);
        navigate("/login");
      } else {
        alert("Password and Confirm Password must match!");
      }
    } catch (err) {
      if (!err?.response) {
        alert("No Server Response");
      } else if (err.response?.status === 409) {
        alert("Username Taken");
      } else {
        alert("Registration Failed");
      }
    }
  };

  return (
    <div className="sign-up-page">
      <TextBanner locationClassName="sign-up-page_banner" text={`Welcome ${username}, Let's get cooking!`} />
      <BrandImage locationClassName="sign-up-page_icon" />

      <div className="sign-up-page_inputs">
        <TextInputOne labelClassName="sign-up-page_label" name="Username"
          id="username" type="text" inputClassName=""
          placeholder="Username"
          onChange={(value) => setUsername(value)}
          required />
        <TextInputOne labelClassName="sign-up-page_label" name="Password"
          id="password" type="password" inputClassName=""
          placeholder="Password"
          onChange={(value) => setPassword(value)}
          required />
        <TextInputOne labelClassName="sign-up-page_label" name="Confirm Password"
          id="password-confirm" type="password" inputClassName=""
          placeholder="Confirm Password"
          onChange={(value) => setConfirmPassword(value)}
          required />
      </div>
      <div className="sign-up-page_buttons">
        <ButtonStyleOne buttonName="Sign-up" onClickHandler={handleSubmit} />
      </div>
    </div>
  );
}