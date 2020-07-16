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
    fetch(`https://randomuser.me/api/?results=200&nat=u`)
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
        {data.results.map(item => (
          <tr key = {item.login.uuid}>
              <>
              <td ><img src={item.picture.thumbnail} alt={item.picture.thumbnail} /></td>
              <td>{item.name.first} {item.name.last}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.dob.date.substring(0, 10)}</td>
              </>
          </tr>
           ))}
        </tbody>
      </table>
    )
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