import { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

export type productType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const productsData: productType[] = [
  { id: 1, name: "Product A", price: 50, quantity: 1 },
  { id: 2, name: "Product B", price: 30, quantity: 1 },
  { id: 3, name: "Product C", price: 20, quantity: 1 },
];

function App() {
  const [cart, setCart] = useState<productType[]>([]);

  const addToCart = (product: productType) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <main className="bg-slate-300 h-screen">
      <header className="px-6 py-4 border-b-2 border-black">
        <h1 className="font-bold">My E-commerce Store</h1>
      </header>
      <ProductList products={productsData} addToCart={addToCart} />
      <Cart cartItems={cart} updateQuantity={updateQuantity} />
    </main>
  );
}

export default App;
