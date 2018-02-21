import React from 'react';

const InputField = (props) => {
  return(
    <div>
      { props.formErrors && props.formErrors[props.name] ? <p className="text-danger">{props.formErrors[props.name]}</p> : "" }
      <label htmlFor={props.name}>{props.displayName}</label>
      <input type={props.type} name={props.name} className={props.className} onChange={props.onChange} required />
    </div>
  );
}

export default InputField;
