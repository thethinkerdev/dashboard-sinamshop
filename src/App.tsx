import { useRef, useState } from "react";
import Content from "./layouts/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Articles from "./pages/Articles";
import Comments from "./pages/Comments";
import Payments from "./pages/Payments";
import Discounts from "./pages/Discounts";
import Categories from "./pages/Categories";
import Settings from "./pages/Settings";
import Messages from "./pages/Messages";
import NotFound from "./components/Errors/NotFound";
import CreateProduct from "./pages/Products/CreateProduct";
import CreateUser from "./pages/Users/CreateUser";
import CreateArticle from "./pages/Articles/CreateArticle";
import Shadow from "./components/Shadow";
import Tickets from "./pages/Tickets";
import SidebarContext from "./context/SidebarContext";
import CreateDiscount from "./pages/Discounts/CreateDiscount";
import CreateCategory from "./pages/Categories/CreateCategory";
import CreateTicket from "./pages/Tickets/CreateTicket";
import ChangePassword from "./pages/Settings/ChangePassword";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean | null>(null);

  const sidebarRef = useRef<HTMLElement>(null);
  const barOpenRef = useRef<HTMLElement>(null);
  const barCloseRef = useRef<HTMLElement>(null);

  const handleOpenSidebar = () => {
    sidebarRef.current?.classList.remove("sidebar-active", "sidebar-deactive");

    sidebarRef.current?.classList.add("sidebar-active");

    setIsSidebarOpen(true);

    if (barOpenRef.current && barCloseRef.current) {
      barOpenRef.current.style.display = "none";
      barCloseRef.current.style.display = "block";
    }
  };
  const handleCloseSidebar = () => {
    sidebarRef.current?.classList.remove("sidebar-active", "sidebar-deactive");

    sidebarRef.current?.classList.add("sidebar-deactive");

    setIsSidebarOpen(false);

    if (barOpenRef.current && barCloseRef.current) {
      barOpenRef.current.style.display = "block";
      barCloseRef.current.style.display = "none";
    }
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen }}>
      {isSidebarOpen ? (
        <Shadow
          onClick={() => {
            setIsSidebarOpen(false);
            handleCloseSidebar();
          }}
        />
      ) : null}
      <Sidebar sidebarRef={sidebarRef} />
      <Header
        barCloseRef={barCloseRef}
        barOpenRef={barOpenRef}
        handleOpenSidebar={handleOpenSidebar}
        handleCloseSidebar={handleCloseSidebar}
      />

      {/* <div onClick={shadowOnClick} className="shadow-el"></div> */}
      <Routes>
        <Route path="/" element={<Content children={<Home />} />} />
        <Route path="/products" element={<Content children={<Products />} />} />

        <Route
          path="/products/create"
          element={<Content children={<CreateProduct />} />}
        />

        <Route path="/users" element={<Content children={<Users />} />} />

        <Route
          path="/users/create"
          element={<Content children={<CreateUser />} />}
        />

        <Route path="/articles" element={<Content children={<Articles />} />} />

        <Route
          path="/articles/create"
          element={<Content children={<CreateArticle />} />}
        />

        <Route path="/comments" element={<Content children={<Comments />} />} />
        <Route path="/payments" element={<Content children={<Payments />} />} />
        <Route
          path="/discounts"
          element={<Content children={<Discounts />} />}
        />

        <Route
          path="/discounts/create"
          element={<Content children={<CreateDiscount />} />}
        />

        <Route
          path="/categories"
          element={<Content children={<Categories />} />}
        />

        <Route
          path="/categories/create"
          element={<Content children={<CreateCategory />} />}
        />

        <Route path="/tickets" element={<Content children={<Tickets />} />} />
        {/* <Route path="" element={<Content children={<Tickets />} />} />
          <Route path="users" element={<Content children={<Tickets />} />} /> */}
        {/* </Route> */}

        <Route
          path="/tickets/create"
          element={<Content children={<CreateTicket />} />}
        />

        <Route path="/settings" element={<Content children={<Settings />} />} />
        <Route path="/messages" element={<Content children={<Messages />} />} />

        <Route
          path="/change-password"
          element={<Content children={<ChangePassword />} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </SidebarContext.Provider>
  );
}
