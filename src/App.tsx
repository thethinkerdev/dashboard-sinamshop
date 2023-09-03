import { useEffect, useState } from "react";
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

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  useEffect(() => {
    setIsSidebarOpen(document.body.clientWidth > 1200);
  }, []);

  const handleBarClick = () => {
    setIsSidebarOpen((curState) => !curState);
  };
  return (
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Header handleBarClick={handleBarClick} isSidebarOpen={isSidebarOpen} />

      <Routes>
        <Route
          path="/"
          element={
            <Content isSidebarOpen={isSidebarOpen} children={<Home />} />
          }
        />
        <Route
          path="/products"
          element={
            <Content isSidebarOpen={isSidebarOpen} children={<Products />} />
          }
        />

        <Route
          path="/products/create"
          element={
            <Content
              isSidebarOpen={isSidebarOpen}
              children={<CreateProduct />}
            />
          }
        />

        <Route
          path="/users"
          element={
            <Content isSidebarOpen={isSidebarOpen} children={<Users />} />
          }
        />

        <Route
          path="/users/create"
          element={
            <Content isSidebarOpen={isSidebarOpen} children={<CreateUser />} />
          }
        />

        <Route
          path="/articles"
          element={
            <Content isSidebarOpen={isSidebarOpen} children={<Articles />} />
          }
        />

        <Route
          path="/articles/create"
          element={
            <Content isSidebarOpen={isSidebarOpen} children={<CreateArticle />} />
          }
        />

        <Route
          path="/comments"
          element={
            <Content isSidebarOpen={isSidebarOpen} children={<Comments />} />
          }
        />
        <Route
          path="/payments"
          element={
            <Content isSidebarOpen={isSidebarOpen} children={<Payments />} />
          }
        />
        <Route
          path="/discounts"
          element={
            <Content isSidebarOpen={isSidebarOpen} children={<Discounts />} />
          }
        />
        <Route
          path="/categories"
          element={
            <Content isSidebarOpen={isSidebarOpen} children={<Categories />} />
          }
        />
        <Route
          path="/settings"
          element={
            <Content isSidebarOpen={isSidebarOpen} children={<Settings />} />
          }
        />
        <Route
          path="/messages"
          element={
            <Content isSidebarOpen={isSidebarOpen} children={<Messages />} />
          }
        />

        <Route
          path="/change-password"
          element={
            <Content isSidebarOpen={isSidebarOpen} children={<Messages />} />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
