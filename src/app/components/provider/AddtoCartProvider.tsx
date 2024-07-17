"use client";
import React, {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import useLocalStorageState from "use-local-storage-state";

// Actualización de la definición del contexto para que coincida con el objeto `value`
const ProductContext = createContext({
  selectedProducts: [] as number[],
  setSelectedProducts: (ids: number[]) => {},
});

const AddtoCartProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProducts, setSelectedProducts] = useLocalStorageState<
    number[]
  >("cart", {
    defaultValue: [],
  });

  // Asegurarse de que las claves del objeto `value` coincidan con las definiciones del contexto
  const value = {
    selectedProducts,
    setSelectedProducts,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export { ProductContext, AddtoCartProvider };
