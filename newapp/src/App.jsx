import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'

export default function App() {

  useEffect(() => { 
    M.AutoInit()  // init materialize JS  
  }, [])

  return (
    <div>
      <p>testing</p>
      <div>
        <p>
          <a className="waves-effect waves-light btn">button</a>
        </p>
      </div>
    </div>
  );
}