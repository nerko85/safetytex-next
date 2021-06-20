import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="page">
      <div className="wrapp">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
