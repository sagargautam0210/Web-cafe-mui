import React, { createContext, useState } from 'react';

// Create CartContext
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // State to store items in the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Function to remove one instance of an item from the cart
  const removeCart = (itemToRemove) => {
    setCartItems((prevItems) => {
      // Find the index of the first occurrence of the itemToRemove
      const index = prevItems.findIndex((item) => item.id === itemToRemove.id);

      // If the item is found, remove only that instance
      if (index !== -1) {
        return [
          ...prevItems.slice(0, index),
          ...prevItems.slice(index + 1),
        ];
      }

      // If the item is not found, return the original array
      return prevItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
