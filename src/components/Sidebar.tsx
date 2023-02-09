import { useContext } from "react";
import OrderContext from "../context/OrderContext";

export function Sidebar() {
  const { order } = useContext(OrderContext);
  // OrderContext has a bunch of stuff. We just want order.
  return (
    <div className="Sidebar">
      <ol>
        {order.map((item) => (
          <li key={item.name}>
            {item.name} ${item.price}
          </li>
        ))}
      </ol>
      <p>Total: ${order.reduce((prev, item) => prev + item.price, 0)}</p>
    </div>
  );
}
