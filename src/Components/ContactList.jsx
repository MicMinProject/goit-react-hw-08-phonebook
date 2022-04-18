import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
import Filter from "./Filter.jsx";

const ContactList = ({ contacts, onClick, onChange }) => {
  return (
    <div
      css={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        border: "0px solid",
        borderRadius: "20px",
      }}>
      <h3>Contacts</h3>
      <Filter onChange={onChange} />
      <ul
        css={{
          padding: "0",
        }}>
        {contacts
          ? contacts.map((contact) => (
              <li
                css={{
                  marginBottom: "0px",
                  width: "408px",
                  position: "relative",
                  listStyle: "none",
                  fontSize: "20px",
                  height: "45px",
                  alignItems: "center",
                  display: "flex",
                  paddingRight: '130px',
                }}
                key={contact.id}
                id={contact.id}
                onClick={onClick}>
                {contact.name}: {contact.number}
                <button
                  css={{
                    cursor: "pointer",
                    padding: "10px 30px",
                    fontSize: "20px",
                    border: "0px",
                    borderRadius: "10px",
                    backgroundColor: "#0697e0",
                    position: "absolute",
                    right: "0px",
                    color: "white",
                    fontWeight: "bold",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset, rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
                    "&:active": {
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                    },
                  }}
                  type="button">
                  Delete
                </button>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  onClick: PropTypes.func,
};

export default ContactList;
