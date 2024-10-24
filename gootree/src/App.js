import { Routes, Route } from "react-router-dom";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Login from './pages/Login';
// import Signup from './pages/Signup';
import Header from "./components/header/Header";
import Page404 from "./pages/Page404";
import Server500 from "./pages/Server500";
// import Home from './pages/Home';
import React, { Suspense } from "react";

// const Home = React.lazy(() => import("./pages/Home"));
const Home = React.lazy(() => import("./pages/Home"))
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));



function App() {
  return (
    <div>
      <Header />

      <Suspense
        fallback={
          <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em]"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/500" element={<Server500 />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </div>
  );
}
export default App;
