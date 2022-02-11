import React from 'react';
import Navigation from './components/navigation/NavigationComponent';
import LogsComponent from './components/logs/LogsComponent';

const App = () => {

  return (
    <div>
      <Navigation />
      <div className='container'>

        <LogsComponent />

      </div>
    </div>
  );

}

export default App;
