import { createContext, useContext } from "react";

export const GlobalContext = createContext({});

export default function useStore() {
  return useContext(GlobalContext);
}
