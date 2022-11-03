import React from "react";
import noUserRoutes from "./Pages/no-user-pages/no-user-routes";
import userRoutes from "./Pages/user-pages/user-routes";
import { BrowserRouter, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter className='app'>
      <Routes>
        {noUserRoutes}
        {userRoutes}
      </Routes>
    </BrowserRouter>

  );
}
