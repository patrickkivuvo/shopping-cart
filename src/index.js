import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

class Pato extends React.Component{
  render(){
    return(
      <div>
        <App/>
      </div>
    )
  }
}
ReactDOM.render(<Pato/>,document.getElementById('root'))


