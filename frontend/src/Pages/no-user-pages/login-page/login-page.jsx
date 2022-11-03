import "./login-page-style.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
/*redux*/
import { useDispatch } from "react-redux";
import { addUser } from "../../../Redux/userSlice";
import { addToken } from "../../../Redux/tokenSlice";
/*api*/
import { baseUrl } from "../../../api/baseUrl";
import axios from "axios";
/*components*/
import ButtonStyleOne from '../../../Components/Button.Components/button-style-one/button-style-one'
import BrandImage from "../../../Components/Image.Components/brand-image/brand-image";
import TextInputOne from "../../../Components/Input.Component/text-input-one/text-input-one";


export default function LoginPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { username: username, password: password };
    const userWithToken = await axios.post(baseUrl + "/login", data);

    dispatch(addToken(userWithToken.data.token));
    dispatch(addUser(userWithToken.data.user));

    navigate("/user-welcome");
    
  };

  return (
    <div className="login-page">
      <h1 className="login-page_header">Welcome Back {username}!</h1>

      <BrandImage locationClassName="login-page_icon" />
      
      <div className="login-page_inputs">
        <TextInputOne labelClassName="login-page_label" name="Username"
          id="username" type="text" inputClassName=""
          placeholder="Username"
          onChange={(value) => setUsername(value)}
          required/>
        <TextInputOne labelClassName="login-page_label" name="Password" 
          id="password" type="password" inputClassName=""
          placeholder="Password" 
          onChange={(value) => setPassword(value)}
          required/>
      </div>
      <div className="login-page_buttons">
        <ButtonStyleOne buttonName="Login" onClickHandler={handleSubmit}/>
      </div>
    </div>
  );
}
