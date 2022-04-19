import UserMenu from "./UserMenu.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import { Login } from "../service/Login";
import { Register } from "../service/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainPage } from "../service/MainPage";
import { HomePage } from "../service/HomePage";
import { PrivateRoute } from "../routes/PrivateRoute";
import { Error404 } from "../routes/Error404.jsx";
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";

export const App = () => {
  return (
    <div
      css={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        fontSize: 30,
        color: "#010101",
        background:
          "linear-gradient(27deg, rgba(84,1,81,1) 19%, rgba(16,51,173,1) 55%, rgba(0,212,255,1) 100%)",
      }}>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route index element={<HomePage />} />
              <Route path="home" element={<HomePage />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <UserMenu />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
};

export default App;
