import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Filter = ({onChange}) =>{
  const filter = useSelector((state) => state.contactsReducer.contacts.filter);
  return(
    <>
      <p>Find contacts by name</p>
      <input
        css={{
          display: 'block',
          marginTop: '10px',
          marginBottom: '20px',
          width: '300px',
          height: '30px',
          borderWidth: '2px',
        }}
        type='text'
        name='filter'
        value={filter}
        onChange={onChange}
      />
    </>
  )
}

Filter.propTypes ={
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default Filter;