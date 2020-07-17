
import React, { useState, useEffect } from 'react';

function ListEmployees() {
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch(`https://randomuser.me/api/?results=400&nat=u`)
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
          {data.results.filter(item => item.location.country === "United States").map(item => (
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
  export default ListEmployees;