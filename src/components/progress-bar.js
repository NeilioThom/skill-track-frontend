// Simple progress bar component
import React from 'react';

const ProgressBar = props => {
  return(
    <div className="progress lg text-center">
      <div className="progress-bar" role="progressbar" style={{width: props.percentage + "%"}}>
        { (props.percentage > 0) ? props.text : '' }
      </div>
    </div>
  );
}

export default ProgressBar;
