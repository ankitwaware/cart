import { productType } from "./App";

const Cart = ({
  cartItems,
  updateQuantity,
}: {
  cartItems: productType[];
  updateQuantity: (id: number, quantity: number) => void;
}) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-4">
      <h2
        className="font-medium mb-4 
      border-2 p-2 mt-2 bg-slate-900 text-white inline-block"
      >
        Cart
      </h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <p>
                {item.name} (x{item.quantity}) - Rs {item.price * item.quantity}
              </p>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            </div>
          ))}
          <h3>Total: Rs {totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
