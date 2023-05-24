import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  let res = document.getElementById("demo");
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        setData(resp);
        console.log(resp);
      });
    });
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="main">
        <table>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>

          {data.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </table>
     
      </div>
    </div>
  );
}

export default App;
