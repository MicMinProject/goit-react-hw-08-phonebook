import { useEffect } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, setFilter } from "../Utils/actions";
import Filter from "./Filter.jsx";
import ContactForm from "./ContactForm.jsx";
import ContactList from "./ContactList.jsx";

function Phonebook() {
  const dispatch = useDispatch();
  const contactsList = useSelector((state) => state.persistedReducer.contacts.items);
  const filterString = useSelector((state) => state.persistedReducer.contacts.filter);

  const filteredOnes = contactsList.filter(contact => contact.name.toLowerCase().includes(filterString.toLowerCase()));

  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    contactsList === []
      ? dispatch(addItem({name: name, number: number, id: nanoid()}))
      : contactsList.some((contact) => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(addItem({name: name, number: number, id: nanoid()}));
    form.reset();
  };

  const handlerFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handlerDelete = (e) => {
    dispatch(deleteItem(e.currentTarget.id));
  };

  

  // useEffect(() => {
  //   JSON.parse(localStorage.getItem("contacts")).map((contact) =>
  //     dispatch(addItem(contact.name, contact.number, contact.id))
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
      <Filter onChange={handlerFilter} />
      <ContactList
        contacts={filterString !== "" ? filteredOnes : contactsList}
        onClick={handlerDelete}
      />
    </div>
  );
}

export default Phonebook;
