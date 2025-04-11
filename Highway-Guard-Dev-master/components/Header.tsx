"use client";
import { MenuIcon } from "./ui/menu-icon";
import { Button } from "./ui/button";
import useDeviceType from "@/lib/useDeviceType";
import Navbar from "./Navbar";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const device = useDeviceType();
  const isMobile = device === "mobile";
  const isDesktop = device === "desktop";
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
    <header className="w-full fixed z-50 bg-white">
      <div className="container bg-white w-[95%] h-[80px] flex items-center justify-between border-b border-gray-300 mx-auto px-2 md:px-4 py-6">
        <Link href={"/"}>
          <Logo/>
        </Link>
        {isDesktop && <Navbar />}
        {!isMobile && (
          <div className="hidden md:flex items-center gap-4">
            <Button
              className="font-bold border-green-900/70 text-primary"
              variant={"outline"}
            >
              Schedule a demo
            </Button>
            <Button className="font-semibold">Get in touch</Button>
          </div>
        )}  
        <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
     <MobileNav isOpen={isOpen} />
    </>
  );
}


export default Header;
