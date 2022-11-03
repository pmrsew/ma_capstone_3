import React from "react";
/* no user pages */ import NoUserRoutes from "./Pages/no-user-pages/no-user-routes";
/* user pages */ import MainPages from "./Pages/UserPages/MainPage";
import { BrowserRouter } from 'react-router-dom'


export default function App() {
  return (

    <BrowserRouter className='app'>
      <NoUserRoutes />
      <MainPages />
    </BrowserRouter>

  );
}
