import { createContext, useContext, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  isSidePanelOpen: boolean;
  setIsSidePanelOpen: (isOpen: boolean) => void;
  getCartItemCount: () => number;
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  isSidePanelOpen: false,
  setIsSidePanelOpen: () => {},
  getCartItemCount: () => 0,
});

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const addItemToCart = (item: CartItem) => {
    // console.log(item);
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (itemId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartItemCount = () => {
    const count = cartItems.length;
    console.log(count);
    return count;
  };

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
        clearCart,
        isSidePanelOpen,
        setIsSidePanelOpen,
        getCartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
