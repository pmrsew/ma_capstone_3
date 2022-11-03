import React from "react"
import { Routes, Route } from 'react-router-dom';

/* no-user-pages */
import OpeningPage from './opening-page/opening-page';
import LoginPage from './login-page/login-page';
import SignUpPage from './sign-up/sign-up-page';

export default function NoUserRoutes() {

  return (
    <Routes className='no-user-routes'>
      {/* access pages */}
      {/* still required - help page, forgot password */}
      <Route path="/" element={<OpeningPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      {/* access pages */}
    </Routes>
  )
}
