import { createContext, useContext, useState } from "react";

import { CartItem } from "@/commonTypes/commonTypes";

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItemsById: (itemId: string) => void;
  removeOneItemById: (itemId: string) => void;
  clearCart: () => void;
  isSidePanelOpen: boolean;
  setIsSidePanelOpen: (isOpen: boolean) => void;
  getCartItemsCount: () => number;
  getSameItemCount: (itemId: string) => number;
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItemsById: () => {},
  removeOneItemById: () => {},
  clearCart: () => {},
  isSidePanelOpen: false,
  setIsSidePanelOpen: () => {},
  getCartItemsCount: () => 0,
  getSameItemCount: () => 0,
});

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const addItemToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemsById = (itemId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const removeOneItemById = (itemId: string) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === itemId);
    if (existingItemIndex !== -1) {
      const newCartItems = [...cartItems];
      newCartItems.splice(existingItemIndex, 1);
      setCartItems(newCartItems);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartItemsCount = () => {
    const count = cartItems.length;
    return count;
  };

  const getSameItemCount = (itemId: string) => {
    const itemCounts = cartItems.reduce<{ [id: string]: number }>(
      (counts, item) => {
        counts[item.id] = (counts[item.id] || 0) + 1;
        return counts;
      },
      {}
    );
    const count = itemCounts[itemId] || 0;
    return count;
  };

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addItem: addItemToCart,
        removeItemsById,
        removeOneItemById,
        clearCart,
        isSidePanelOpen,
        setIsSidePanelOpen,
        getCartItemsCount,
        getSameItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
