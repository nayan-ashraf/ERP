import React from 'react';

const Input = ({ type, id, value, name, label, onChange, errors }) => {
        return (
          

<div class="mb-3">
    <label for="" class="form-label text-uppercase fw-bold" style={{'fontFamily': 'Apple Chancery, cursive', 'fontSize': '13px'}}>{label}</label>
    <input
              name={name}
              value={value}
              type={type}
              class="form-control"
              id={id}
              autoComplete="off"
              style={{'borderBottom': '1px solid black'}}
              onChange={onChange}
              errors={errors}
            />
  </div>
           
          
        );
      };
      
      export default Input;