import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="page">
      <div className="wrapp">
        <Header />
        <div className="container">
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
