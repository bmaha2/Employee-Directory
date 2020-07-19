import React from 'react';
import './App.css';
import Header from "./components/Header";
import ListEmployees from "./components/ListEmployees";
//import axios from 'axios';
function App() {
//   const [employees, setEmployees] = useState([]);
  
//   useEffect(() => {
    
//     axios
//     .get(`https://randomuser.me/api/?results=400&nat=u`)
//     .then(res => {
//       setEmployees(res.data)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }, []);
  return (
    <>
      <Header />
      <ListEmployees />
    </>
  );
}

export default App;