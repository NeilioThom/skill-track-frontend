// Simple progress bar component
import React from 'react';

const ProgressBar = props => {
  return(
    <div class="progress text-center">
      <div class="progress-bar bg-info" role="progressbar" style={{width: props.percentage + "%"}}>
        {props.text}
      </div>
    </div>
  );
}

export default ProgressBar;
