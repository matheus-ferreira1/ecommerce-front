import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const productsURL = "https://fakestoreapi.com/products";

  // managing products state
  const [products, setProducts] = useState([]);

  // fetching products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(productsURL);
      const data = await response.json();
      // console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
