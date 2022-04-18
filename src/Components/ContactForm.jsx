import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import PropTypes from 'prop-types';

const ContactForm =({onSubmit, id, onChange})=> {
  return(
    <form 
      css={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: "space-between",
        border: "0px solid",
        borderRadius: "20px",
        marginBottom: '20px',

      }}
      onSubmit={onSubmit}>
        <h2>Phonebook</h2>
          <label htmlFor={id}>
            
            <input 
            css={{
              width: "400px",
              height: "50px",
              marginBottom: "10px",
              fontSize: "20px",
              borderRadius: "10px",
              borderColor: "#abacac",
              backgroundColor: "#ced4d4",
            }}
              id={id}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={onChange}
              placeholder='Name'
            />
          </label>
          <label htmlFor={`${id}+tel`}>
            
            <input
             css={{
              width: "400px",
              height: "50px",
              marginBottom: "10px",
              fontSize: "20px",
              borderRadius: "10px",
              borderColor: "#abacac",
              backgroundColor: "#ced4d4",
            }}
              id={`${id}+tel`}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={onChange}
              placeholder='Number'
            />
          </label>
          
          <button 
          css={{
            cursor: 'pointer',
            marginTop: "20px",
            padding: "10px 30px",
            fontSize: "25px",
            border: "0px",
            borderRadius: "10px",
            backgroundColor: "#0697e0",
            color: "white",
            fontWeight: "bold",
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset, rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
            '&:active': {
              boxShadow:'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
            }
          }}
          type='submit'>
            Add contact
          </button>
        </form>
  )
}

ContactForm.propTypes ={
  onSubmit: PropTypes.func,
  id: PropTypes.string,
  onChange: PropTypes.func
}

export default ContactForm;