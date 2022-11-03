import { Route } from 'react-router-dom';

/* no-user-pages */
import OpeningPage from './opening-page/opening-page';
import LoginPage from './login-page/login-page';
import SignUpPage from './sign-up/sign-up-page';

export default [
      <Route path="/" element={<OpeningPage />} key='opening' />,
      <Route path="/login" element={<LoginPage />} key='login'/>,
      <Route path="/sign-up" element={<SignUpPage />} key='sign-up' />
]
