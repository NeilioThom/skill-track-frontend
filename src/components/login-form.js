import React from 'react';

import InputField from './input-field';

const LoginForm = (props) => {
  return(
    <div>
      <form onSubmit={props.onSubmit} id="login">
        <div className="form-group">
          <InputField type="text" name="username" displayName="Username: " formErrors={props.formErrors} onChange={props.onChange} />
        </div>
        <div className="form-group">
          <InputField type="password" name="password" displayName="Password: " formErrors={props.formErrors} onChange={props.onChange} />
        </div>
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
}

export default LoginForm;
