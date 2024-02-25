"use client";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SideBar, { SideBarProps } from "./components/sidebar";
import { useEffect, useState } from "react";

const menu: SideBarProps = {
  items: [
    {
      key: "articles",
      title: "Articles",
    },
    {
      key: "news",
      title: "News",
    },
    {
      key: "blog",
      title: "Blog",
    },
    {
      key: "about-us",
      title: "About Us",
    },
    {
      key: "contact-us",
      title: "Contact Us",
    },
  ],
};

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isHidden, setIsHidden] = useState(true);
  const handleToggle = () => {
    setIsHidden(!isHidden);
  };

  useEffect(() => {
    let ref: any = null;
    if (!isHidden) {
      ref = setTimeout(() => {
        setIsHidden(true);
      }, 3000);
    }
    return () => clearTimeout(ref);
  }, [isHidden]);
  return (
    <main className={"main"}>
      <header className="header">
        <Navbar handleToggle={handleToggle} />
      </header>
      {!isHidden && <SideBar items={menu.items} />}
      <section className="container">{children}</section>
      <footer className="footer">
        <Footer />
      </footer>
    </main>
  );
}
