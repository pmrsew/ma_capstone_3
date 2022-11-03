import "./Sign-Up_Page.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
/*api*/
import axios from "axios";
import { baseUrl } from "../../../api/baseUrl";
/*components*/
import Text_Banner from "../../../Components/Banner.Component/Text_Banner/Text_Banner";
import Brand_Image from "../../../Components/Image.Components/Brand_image/Brand_Image";
import Text_Input_One from "../../../Components/Input.Component/Text_Input_One/Text_Input_One";
import Button_Style_One from '../../../Components/Button.Components/Button_Style_One/Button_Style_One'

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
      <Text_Banner locationClassName="sign-up-page_banner" text={`Welcome ${username}, Let's get cooking!`} />
      <Brand_Image locationClassName="sign-up-page_icon" />

      <div className="sign-up-page_inputs">
        <Text_Input_One labelClassName="username-label" name="Username"
          id="username" type="text" inputClassName=""
          placeholder="Username"
          onChange={(value) => setUsername(value)}
          required />
        <Text_Input_One labelClassName="password-label" name="Password"
          id="password" type="password" inputClassName=""
          placeholder="Password"
          onChange={(value) => setPassword(value)}
          required />
        <Text_Input_One labelClassName="password-label" name="Confirm Password"
          id="password-confirm" type="password" inputClassName=""
          placeholder="Confirm Password"
          onChange={(value) => setConfirmPassword(value)}
          required />
      </div>
      <div className="sign-up-page_buttons">
        <Button_Style_One buttonName="Sign-up" onClickHandler={handleSubmit} />
      </div>
    </div>
  );
}