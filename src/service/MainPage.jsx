import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAsync } from "../utils/fetchAPI";
import { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";

export const MainPage = () => {
  const token = useSelector((state) => state.persistedReducer.users.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home')
  }, [])

  return (
    <main
      css={{
        width: "100%",
        height: "100%",
      }}>
      <nav
        css={{
          height: "60px",
          padding: "20px",
          borderBottom: "solid 1px",
          marginBottom: "100px",
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor: "#fff",
          alignItems: "center",
          boxShadow:
            "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        }}>
        {token ? (
          <NavLink to="/home">
            <button
              css={{

                padding: "10px 30px",
                fontSize: "25px",
                border: "0px",
                borderRadius: "10px",
                backgroundColor: "#0697e0",
                color: "white",
                fontWeight: "bold",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset, rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
                "&:active": {
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                },
              }}
              type="button"
              onClick={() => dispatch(logoutAsync(token))}>
              Log out
            </button>
          </NavLink>
        ) : (
          <>
            <div
             css={{
               width: '50%',
               display: 'flex',
             }}>
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        cursor: "pointer",
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px 30px",
                        border: "solid 0px",
                        borderRadius: "10px",
                        backgroundColor: "#0697e0",
                        fontSize: "25px",
                        fontWeight: "bold",
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset, rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
                        "&:active": {
                          boxShadow:
                            "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                        },
                      }
                    : {
                        cursor: "pointer",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px 30px",
                        border: "solid 0px",
                        borderRadius: "10px",
                        backgroundColor: "#0697e0",
                        fontSize: "25px",
                        fontWeight: "bold",
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset, rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
                        "&:active": {
                          boxShadow:
                            "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                        },
                        textDecoration: "none",
                      }
                }
                to="/home">
                Home Page
              </NavLink>
            </div>
            <div
              css={{
                width: "50%",
                justifyContent: "flex-end",
                display: "flex",
                alignItems: "center",
              }}>
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        cursor: "pointer",
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "50px",
                        padding: "10px 30px",
                        border: "solid 0px",
                        borderRadius: "10px",
                        backgroundColor: "#0697e0",
                        fontSize: "25px",
                        fontWeight: "bold",
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset, rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
                        "&:active": {
                          boxShadow:
                            "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                        },
                      }
                    : {
                        cursor: "pointer",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "50px",
                        padding: "10px 30px",
                        border: "solid 0px",
                        borderRadius: "10px",
                        backgroundColor: "#0697e0",
                        fontSize: "25px",
                        fontWeight: "bold",
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset, rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
                        "&:active": {
                          boxShadow:
                            "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                        },
                        textDecoration: "none",
                      }
                }
                to="/register">
                Sign up
              </NavLink>

              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        cursor: "pointer",
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px 30px",
                        border: "solid 0px",
                        borderRadius: "10px",
                        backgroundColor: "#0697e0",
                        fontSize: "25px",
                        fontWeight: "bold",
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset, rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
                        "&:active": {
                          boxShadow:
                            "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                        },
                      }
                    : {
                        cursor: "pointer",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px 30px",
                        border: "solid 0px",
                        borderRadius: "10px",
                        backgroundColor: "#0697e0",
                        fontSize: "25px",
                        fontWeight: "bold",
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset, rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
                        "&:active": {
                          boxShadow:
                            "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                        },
                        textDecoration: "none",
                      }
                }
                to="/login">
                Log in
              </NavLink>
            </div>
          </>
        )}
      </nav>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Outlet />
      </div>
    </main>
  );
};
