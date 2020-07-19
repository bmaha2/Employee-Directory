
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListEmployees() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  
  useEffect(() => {
    axios
    .get("https://randomuser.me/api/?results=400&nat=u")
      .then(res => setEmployees(res.data.results))
      .catch(console.error)
  }, []);

  useEffect(() => {
    setFilteredEmployees(
      employees.filter(employee => {
        return employee.name.first.toLowerCase().includes(search.toLowerCase())
      })
    )
  },[search, employees])
  const handleInputChange = event => {
    setSearch(event.target.value);
  };
 
    return (
      <div className = "container">
        <div className="input-group d-inline-flex p-2 bd-highlight w-25">
          <input onChange = {handleInputChange}type="text" className="form-control" placeholder="Search By Name" aria-label="Username" aria-describedby="addon-wrapping" />
        </div>
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
            {filteredEmployees.filter(item => item.location.country === "United States").map(item => (
              <tr key={item.login.uuid}>
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
      </div>
    )
  

}
export default ListEmployees;