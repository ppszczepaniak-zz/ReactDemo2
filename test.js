import React from 'react';
import ReactDOM from 'react-dom';

function Button() {
    const [counter, setCounter] = useState();
      return <button>TEST</button>;
  }
  
  
  
  ReactDOM.render(
    <Button />, 
    document.getElementById('mountNode'),
  );