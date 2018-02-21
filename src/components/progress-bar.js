// Simple progress bar component
import React from 'react';

const ProgressBar = props => {
  return(
    <div class="progress lg text-center">
      <div class="progress-bar" role="progressbar" style={{width: props.percentage + "%"}}>
        {props.text}
      </div>
    </div>
  );
}

export default ProgressBar;
