import React from "react";
/* no user pages */ import noUserRoutes from "./Pages/no-user-pages/no-user-routes";
/* user pages */ import mainPages from "./Pages/UserPages/MainPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import OpeningPage from "./Pages/no-user-pages/opening-page/opening-page";


export default function App() {
  return (

    <BrowserRouter className='app'>
      <Routes>
        {mainPages}
        {noUserRoutes}
      </Routes>


    </BrowserRouter>

  );
}
