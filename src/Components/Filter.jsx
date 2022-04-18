import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Filter = ({onChange}) =>{
  const filter = useSelector((state) => state.persistedReducer.contacts.contacts.filter);
  return(
    <>
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
        
        type='text'
        placeholder='Search by name'
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