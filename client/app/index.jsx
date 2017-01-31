import React from 'react';
import {render} from 'react-dom';

// ...
import AwesomeComponent from './Components/AwesomeComponent.jsx';
// ...
class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello Thien Trinh Duc!</p>
        <AwesomeComponent />
      </div>
    );
  }
}

// ...
render(<App/>, document.getElementById('app'));