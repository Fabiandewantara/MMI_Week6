import logo from "./unnamed.jpg";
import "./App.css";
import React, { useEffect, useState } from "react";

//components
import MyButton from "./components/button";
import MyTable from "./components/myTable";

function App() {
  const [counter, setCounter] = useState(0);

  const [buttonName, setButtonName] = useState("button State");

  const [data, setData] = useState([
    {
      id: 1,
      name: "Test A",
      age: 20,
    },
    {
      id: 2,
      name: "Test B",
      age: 21,
    },
    {
      id: 3,
      name: "Test C",
      age: 24,
    },
  ]);

  const handleDelete = (id) => {
    setData(data.filter((v)=>v.id!==id))
  };
  const handleCounter = (num) => {
    setCounter(counter + num);
  };

  useEffect(() => {
    //menjalankan suatu function saat web belum muncul
    //cth get data fot API
    console.log("use effect run");
  }, []);

  return (
    <div className="container">
      <table className="table">
        <tr>
          <th>ID</th>
          <th>Nama</th>
          <th>Umur</th>
          <th>Aksi</th>
        </tr>
        <MyTable
          data={data}
          onDelete={handleDelete}/>
      </table>
      {/* <MyTable data = {data} onDelete ={handleDelete}/> */}
    </div>
  );
}

export default App;
