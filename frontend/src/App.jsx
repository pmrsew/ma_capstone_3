import React from "react";
import { Link, Routes, Route } from "react-router-dom";
/* access pages */ import Register_Routrs from "./Pages/Register_Pages/Register_Routrs";
/* main pages */ import MainPages from "./Pages/MainPages/MainPage";

/* redux imports*/
import store from "./Redux/configureStore";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Register_Routrs />
        <MainPages />
      </div>
    </Provider>
  );
}
