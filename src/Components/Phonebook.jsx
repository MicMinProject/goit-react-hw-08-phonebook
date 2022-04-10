import { useEffect } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, fetchAsync, addAsync, deleteAsync } from "../Utils/reducer";
import Filter from "./Filter.jsx";
import ContactForm from "./ContactForm.jsx";
import ContactList from "./ContactList.jsx";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";

function Phonebook() {
  const dispatch = useDispatch();
  const contactsList = useSelector(
    (state) => state.contactsReducer.contacts.items,
  );
  const filterString = useSelector(
    (state) => state.contactsReducer.contacts.filter,
  );

  const filteredOnes = contactsList.filter((contact) =>
    contact.name.toLowerCase().includes(filterString.toLowerCase()),
  );

  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    contactsList === []
      ? dispatch(addAsync({ name: name, phone: number, id: nanoid() }))
      : contactsList.some((contact) => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(addAsync({ name: name, phone: number, id: nanoid() }));
    form.reset();
  };

  const handlerFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handlerDelete = (e) => {
    dispatch(deleteAsync(e.currentTarget.id));
  };

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  // useEffect(() => {
  //   JSON.parse(localStorage.getItem("contacts")).map((contact) =>
  //     dispatch(addItem(contact.name, contact.phone, contact.id))
  //     );
  //     console.log(JSON.parse(localStorage.getItem("contacts")))
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contactsList));
  // }, [contactsList]);

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={handlerSubmit} id={nanoid()} />

      <h3>Contacts</h3>
      <p 
        css={{ marginBottom: "0px", fontSize: "20px" }}>
        You can check contacts data{" "}
        <a
          css={{ textDecoration: "none", color: "#FB6700" }}
          href="https://6250baabe3e5d24b34264548.mockapi.io/contacts">
          here
        </a>
      </p>
      <Filter onChange={handlerFilter} />
      <ContactList
        contacts={filterString !== "" ? filteredOnes : contactsList}
        onClick={handlerDelete}
      />
    </div>
  );
}

export default Phonebook;
