import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  return (
    <div className="flex flex-col" style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
