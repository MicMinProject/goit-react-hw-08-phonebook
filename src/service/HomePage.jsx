import {NavLink} from 'react-router-dom';
import { useSelector} from 'react-redux';
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";

export const HomePage = () => {

  const token = useSelector(state => state.persistedReducer.users.token)

  return (
    <div
    css={{
      height: '200px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    }}>
      <a
        css={{
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
          textDecoration: "none",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset, rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
          "&:active": {
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
          },
          "&:hover": {
            color: 'black',
            transition: 'color 100ms'
          },
        }}
        href="https://micminproject.github.io/goit-react-hw-08-phonebook/">
        Strona na GH Pages
      </a>
      <a
        css={{
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
          textDecoration: "none",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset, rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
          "&:active": {
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
          },
          "&:hover": {
            color: 'black',
            transition: 'color 100ms'
          },
        }}
        href="https://github.com/MicMinProject/goit-react-hw-08-phonebook.git">
        Repozytorium
      </a>
      {token ? <NavLink style={({ isActive }) =>
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
                } to='/phonebook'>Go to contacts</NavLink> : null}
    </div>
  );
};
