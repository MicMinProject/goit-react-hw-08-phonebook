import { useEffect } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, fetchAsync, addAsync, deleteAsync } from "../utils/contactsReducer";
import ContactForm from "./ContactForm.jsx";
import ContactList from "./ContactList.jsx";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";

function Phonebook() {
  const dispatch = useDispatch();
  const contactsList = useSelector(
    (state) => state.persistedReducer.contacts.contacts.items
  );
  const filterString = useSelector(
    (state) => state.persistedReducer.contacts.contacts.filter
  );
  const token = useSelector(state => state.persistedReducer.users.token)

  const filteredOnes = contactsList.filter((contact) =>
    contact.name.toLowerCase().includes(filterString.toLowerCase()),
  );

  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contact = { name: name, number: number }
    contactsList === []
      ? dispatch(addAsync({token, contact}))
      : contactsList.some((contact) => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(addAsync({token, contact}));
    form.reset();
  };

  const handlerFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const sendDeleteRequest = async (id) => {
    await dispatch(deleteAsync({token, id}));
  };

  const handlerDelete = async (e) => {
    const id = e.currentTarget.id;
    await sendDeleteRequest(id);
    dispatch(fetchAsync(token))
  };

  useEffect(() => {
    dispatch(fetchAsync(token));
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
      <ContactForm onSubmit={handlerSubmit} id={nanoid()} />

      <ContactList
        contacts={filterString !== "" ? filteredOnes : contactsList}
        onClick={handlerDelete}
        onChange={handlerFilter}
      />
    </div>
  );
}

export default Phonebook;
