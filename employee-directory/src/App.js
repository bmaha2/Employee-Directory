import React from 'react';

import './App.css';

function App() {

  function Header() {
    return (
    
<div className="jumbotron jumbotron-fluid text-info text-center">
  <div className="container">
    <h1 className="display-4">Employee Directory</h1>
  </div>
</div>
    )
  }
  return (
    <>
      <Header />
    </>
  );
}

export default App;