// import "./App.css";

import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/items")
      .then((response) => {
        setItems(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}

export default App;
