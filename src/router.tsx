import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./GeneralComponents/Loading";
import NotFound from "../src/components/NotFound";

const HomePage = lazy(() => import("../src/components/HomePage/index"));
const Login = lazy(() => import("../src/auth/Login/index"));
const Register = lazy(() => import("../src/auth/Register/index"));
const WishList = lazy(() => import("../src/components/WishList"));
const Cart = lazy(() => import("../src/components/Cart"));
const CheckOut = lazy(()=> import('../src/components/Checkout'));
const Account = lazy(()=> import('../src/components/Account'))
const About = lazy(()=> import('../src/components/About'))
const Contact =  lazy(()=> import('../src/components/Contact'))
const NowFound = lazy(()=> import('../src/components/NotFound'))

const router = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/wishlist",
    element: <WishList />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        {router.map((item, index) => (
          <Route path={item.path} element={item.element} key={index}></Route>
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
