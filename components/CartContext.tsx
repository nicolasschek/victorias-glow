import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  quantity: number;
  variant?: string;
  notes?: string;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (uniqueId: string) => void;
  updateQuantity: (uniqueId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  justAdded: boolean;
  getUniqueId: (item: CartItem) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [justAdded, setJustAdded] = useState(false);

  const getUniqueId = (item: CartItem) => {
    return `${item.id}-${item.variant || 'no-variant'}-${item.notes || 'no-notes'}`;
  };

  const addItem = (item: Omit<CartItem, "quantity">) => {
    setItems((prevItems) => {
      // Si el producto tiene variante, considerarlo como item diferente
      const existingItem = prevItems.find((i) => 
        i.id === item.id && 
        i.variant === item.variant &&
        i.notes === item.notes
      );
      if (existingItem) {
        return prevItems.map((i) =>
          (i.id === item.id && i.variant === item.variant && i.notes === item.notes)
            ? { ...i, quantity: i.quantity + 1 } 
            : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
    
    // Trigger animation
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 300);
  };

  const removeItem = (uniqueId: string) => {
    setItems((prevItems) => prevItems.filter((item) => getUniqueId(item) !== uniqueId));
  };

  const updateQuantity = (uniqueId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(uniqueId);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        getUniqueId(item) === uniqueId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalItems,
        justAdded,
        getUniqueId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
