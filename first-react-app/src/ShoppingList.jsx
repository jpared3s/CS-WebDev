import React from "react";

export default function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <li style={{ color: i.completed ? "grey" : "red" , textDecoration: "line-through"}}>
          {i.item} - {i.quantity}
        </li>
      ))}
    </ul>
  );
}
