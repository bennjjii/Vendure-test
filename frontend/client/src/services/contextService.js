import { createContext, useContext, useState } from "react";

export const context = createContext();

export function useCont() {
  return useContext(context);
}

function useProvideContext() {
  const [someData, setSomeData] = useState(undefined);
  return { someData, setSomeData };
}
export function ProvideContext({ children }) {
  const auth = useProvideContext();
  return <context.Provider value={auth}>{children}</context.Provider>;
}
