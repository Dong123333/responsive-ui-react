import { createContext, useContext, useState } from "react";
export const AdminContext = createContext();
export function AdminContextProvider({ children }) {
  const [collapseMenu, setCollapseMenu] = useState(false);
  return (
    <AdminContext.Provider value={{ collapseMenu, setCollapseMenu }}>
      {children}
    </AdminContext.Provider>
  );
}

export const useAdminContext = () => useContext(AdminContext);
