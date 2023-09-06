import { createContext } from "react";

const data: {
  isSidebarOpen: boolean | null;
} = { isSidebarOpen: null };

const SidebarContext = createContext(data);

export default SidebarContext;
