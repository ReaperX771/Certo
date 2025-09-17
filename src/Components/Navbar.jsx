import React, { useState, useEffect } from 'react';
import logo from '../assets/Images/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const sections = [
  { id: 'iphone', label: 'iPhone', offset: 100 },
  { id: 'android', label: 'Android', offset: 50 },
  { id: 'help', label: 'Help', offset: 50 },
  { id: 'company', label: 'Company', offset: 50 },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [menuOpen]);

  return (
    <>
      <header className="top-0 left-0 z-50 fixed bg-white shadow-md w-full">
        <div className="relative flex justify-between items-center m-auto py-4 w-[90%]">
          {/* Logo always on top */}
          <img className="z-50 relative w-32" src={logo} alt="Logo" />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <div className="flex gap-6 font-bold text-[#02033B] text-lg">
              {sections.map((s) => (
                <AnchorLink key={s.id} offset={s.offset} href={`#${s.id}`}>
                  {s.label}
                </AnchorLink>
              ))}
            </div>
            <AnchorLink href="#sign">
            <button className="bg-[#4335DE] px-5 py-2 rounded-full text-white">
              Sign in
            </button>
            </AnchorLink>
          </nav>

          {/* Mobile Buttons */}
          <div className="lg:hidden z-50">
            {!menuOpen && (
              <button
                className="flex flex-col gap-1"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <span className="block bg-[#02033B] rounded w-7 h-1"></span>
                <span className="block bg-[#02033B] rounded w-7 h-1"></span>
                <span className="block bg-[#02033B] rounded w-7 h-1"></span>
              </button>
            )}
            {menuOpen && (
              <button
                className="font-bold text-[#02033B] hover:text-[#4335DE] text-5xl"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Overlay (slides under logo) */}
        <div
          className={`fixed inset-0 lg:hidden transition-all duration-300 ${
            menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          <div
            className={`absolute top-0 right-0 h-full w-full flex flex-col items-center justify-start transform transition-transform duration-700 bg-white z-40 ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <ul className="flex flex-col gap-8 mt-28 font-bold text-[#02033B] text-2xl text-center">
              {sections.map((s) => (
                <AnchorLink
                  key={s.id}
                  offset={s.offset}
                  href={`#${s.id}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {s.label}
                </AnchorLink>
              ))}
              <AnchorLink href="#sign" onClick={() => setMenuOpen(false)}>
              <button className="bg-[#4335DE] px-8 py-3 rounded-full text-white">
                Sign in
              </button>
              </AnchorLink>
            </ul>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[72px] lg:h-[80px]"></div>
    </>
  );
}

export default Navbar;
