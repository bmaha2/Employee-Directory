import React, { useState, useEffect } from 'react';

import './App.css';


function Header() {
  return (

    <div className="jumbotron jumbotron-fluid text-info text-center">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
      </div>
    </div>

  )
}

function ListEmployees({ name }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=1&nat=u`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error)
  }, []);
  if (data) {
    return (
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src={data.results[0].picture.thumbnail} alt = {data.results[0].picture} /></td>
            <td>{data.results[0].name.first} {data.results[0].name.last}</td>
            <td>{data.results[0].phone}</td>
            <td>{data.results[0].email}</td>
            <td>{data.results[0].dob.date.substring(0,10)}</td>
          </tr>
        </tbody>
      </table>)
  }
  return null;
}

function App() {
  return (
    <>
      <Header />
      <ListEmployees />

    </>
  );
}

export default App;