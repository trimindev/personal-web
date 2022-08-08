import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen">
      <Navbar />
      <main className="mt-16 sm:mt-20 h-screen px-2 sm:px-5 mx-auto max-w-screen-lg">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
