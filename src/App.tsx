import { useEffect, useState } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  
  
  useEffect(()=>{
    setIsSidebarOpen(document.body.clientWidth > 1200)
  },[])
  
  const handleBarClick = () => {
    setIsSidebarOpen((curState) => !curState);
  };
  return (
    <div className="flex flex-col" style={{ minHeight: "100vh" }}>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Header handleBarClick={handleBarClick} isSidebarOpen={isSidebarOpen} />
      <Content isSidebarOpen={isSidebarOpen} />
      <Footer />
    </div>
  );
}
