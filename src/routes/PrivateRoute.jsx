import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const PrivateRoute = () => {
  const token = useSelector((state) => state.persistedReducer.users.token);
  const navigate = useNavigate();

  useEffect(() => {
    !token && navigate("/Login");
  }, [token]);

  return <Outlet />;
};
