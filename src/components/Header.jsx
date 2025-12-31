import Navbar from "./Navbar";
import { useState } from "react";
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="mt-1 absolute top-3 left- 3 w-full z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/60 rounded-2xl ring-inset ring-1 ring-zinc-50/5">
      <div className="max-w-screen-xl mx-auto px-6 h-16 grid grid-cols-[auto,1fr,auto] items-center">

        {/* Logo */}
        <a href="/" className="logo">
          <img src="/images/logo.svg" width={40} height={40} alt="Logo" />
        </a>

        {/* Desktop Navbar (centered perfectly) */}
        <div className="h-0 hidden md:flex justify-center ">
          <Navbar />
        </div>

        {/* Contact button (right aligned) */}
        <a
          href="#contact"
          className="btn btn-secondary max-md: hidden md:justify-self-end text-white font-medium hover:text-blue-400 transition"
        >
          Contact Me
        </a>

        {/* Mobile menu */}
        <div className="md:hidden justify-self-end">
          <button className="w-10 h-10 grid place-items-center bg-zinc-50/10 rounded-xl" onClick={()=>setNavOpen((prev)=> !prev)}>
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar nroundedavOpen={navOpen} />
        </div>

      </div>
    </header>
  );
};

export default Header;
