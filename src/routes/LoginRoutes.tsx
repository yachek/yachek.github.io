import SignUp from "../components/auth/signUpComponent";
import {Outlet, RouteObject} from 'react-router-dom'
import LoginComponent from "../components/auth/loginComponent";

const MinimalLayout = () => (
    <>
        <Outlet />
    </>
);

const LoginRoutes: RouteObject = {
  path: '/',
  element: <MinimalLayout/>,
  children: [
      {
          path: 'signup',
          element: <SignUp />
      },
      {
          path: 'login',
          element: <LoginComponent />
      }
  ]
};

export default LoginRoutes;
