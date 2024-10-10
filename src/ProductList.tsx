import { productType } from "./App";

const ProductList = ({
  products,
  addToCart,
}: {
  products: productType[];
  addToCart: (product: productType) => void;
}) => {
  return (
    <div className="mt-4">
      <h2
        className="font-medium mb-4 
      border-2 p-2 mt-2 bg-slate-900 text-white inline-block
      "
      >
        Products
      </h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} className="border-2 border-slate-800 p-3">
            <h3>{product.name}</h3>
            <p>Price: Rs {product.price}</p>
            <button
              className="border-2 p-1 mt-2 bg-slate-900 text-white"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
