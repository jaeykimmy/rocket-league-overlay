import "./App.css";
import { items } from "./data";
import React from "react";
import ItemList from "./ItemList";

function App() {
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}

export default App;
