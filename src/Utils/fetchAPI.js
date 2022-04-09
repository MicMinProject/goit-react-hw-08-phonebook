import axios from 'axios';

const BASE_URL = 'https://6250baabe3e5d24b34264548.mockapi.io/contacts';

export function fetchContacts(){
  axios.get(BASE_URL)
    .then(response => {return response})
    .catch(error => console.log(error))
}

export function addContact(contact){
  axios.post(BASE_URL, contact)
    .then(response => {return response})
    .catch(error => console.log(error))
}

export function deleteContact(id){
  axios.delete(`${BASE_URL}/${id}`)
}