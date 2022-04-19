import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
  const token = useSelector((state) => state.persistedReducer.users.token);
  const location = useLocation();

  return token ? children : <Navigate to='/login' replace state={{ from: location }}/>
};
