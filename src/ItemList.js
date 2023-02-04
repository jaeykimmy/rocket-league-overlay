import React from "react";

function ItemList({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.color}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ItemList;
