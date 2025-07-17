'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Star, ShoppingCart, User } from "lucide-react";
import SidePanel from "../SidePanel";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 30);

      if (currentScrollY <= 0) {
        setIsVisible(true);
        return;
      }

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  const translateClass = isVisible ? "translate-y-0" : "-translate-y-full";
  const bgClass = isAtTop
    ? "bg-transparent hover:bg-black transition-colors duration-500 ease-in-out"
    : isVisible
    ? "bg-genese-dark shadow-md backdrop-blur-sm"
    : "bg-genese-black shadow-md backdrop-blur-sm";

  const textClass = isAtTop
    ? "text-genese-ivory"
    : isVisible
    ? "text-genese-ivory"
    : "text-genese-dark";

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 font-cormorant ${translateClass}`}>
        <div className={`w-full transition-colors duration-300 ease-in-out ${bgClass}`}>
          <div className="max-w-full mx-auto px-3 md:px-12 py-4 grid grid-cols-3 items-center">
            {/* Menú lateral */}
            <div
              className={`flex items-center gap-6 md:gap-2 transition-colors duration-300 ease-in-out ${textClass}`}
            >
              <Menu className="w-7 h-7 cursor-pointer" onClick={() => setMenuOpen(true)} />
              <p className="cursor-pointer uppercase hidden md:block" onClick={() => setMenuOpen(true)}> Menú</p>
              <User className="w-6 h-6 md:w-6 md:h-6 cursor-pointer block md:hidden" onClick={() => setLoginOpen(true)} />
            </div>

            {/* Logo centrado */}
            <div className="justify-self-center">
              <Link href="/">
                <span className={`text-2xl font-bold tracking-wide uppercase transition-colors duration-300 ease-in-out ${textClass}`}>
                  Genèse
                </span>
              </Link>
            </div>

            {/* Íconos derecha */}
            <div className={`flex items-center gap-6 justify-self-end transition-colors duration-300 ease-in-out ${textClass}`}>
              <Star className="w-6 h-6 md:w-6 md:h-6 cursor-pointer" />
              <ShoppingCart className="w-6 h-6 md:w-6 md:h-6 cursor-pointer" />
              <User className="w-6 h-6 md:w-6 md:h-6 cursor-pointer hidden md:block" onClick={() => setLoginOpen(true)} />
            </div>
          </div>
        </div>
      </nav>

      {/* Menú lateral izquierdo */}
      <SidePanel isOpen={menuOpen} onClose={() => setMenuOpen(false)} position="left">
        <h2 className="text-xl font-semibold text-genese-dark mb-6">Menú</h2>
        <ul className="flex flex-col gap-2 md:gap-4 text-genese-dark">
          <li><Link href="#features" onClick={() => setMenuOpen(false)}>Características</Link></li>
          <li><Link href="#contact" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
        </ul>
      </SidePanel>

      {/* Panel login lateral derecho */}
      <SidePanel isOpen={loginOpen} onClose={() => setLoginOpen(false)} position="right">
        <h2 className="text-xl font-semibold text-genese-dark mb-6">Inicia sesión</h2>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Correo electrónico" className="border px-4 py-2 rounded" />
          <input type="password" placeholder="Contraseña" className="border px-4 py-2 rounded" />
          <button type="submit" className="bg-genese-gold text-genese-black py-2 rounded font-medium hover:opacity-90">
            Entrar
          </button>
        </form>
      </SidePanel>
    </>
  );
}
