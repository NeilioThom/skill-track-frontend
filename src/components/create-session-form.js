import React from 'react';

const CreateSessionForm = (props) => {
  return(
    <div>
      <form onSubmit={props.onSubmit} id="create-session">
        <div className="form-group">
          <label htmlFor="comment">Date:</label>
          <input type="date" name="created_date" onChange={ props.onChange } />
        </div>
        <div className="form-group">
          <label htmlFor="time-spent">Time Spent:</label>
          <input type="time" name="time_spent" onChange={ props.onChange } />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea name="comment" onChange={ props.onChange } />
        </div>
        <input type="submit" value="Log Session" />
      </form>
    </div>
  );
}

export default CreateSessionForm;
