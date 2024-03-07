'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Main navigation items (for larger screens)
  const navItems = [
    { name: 'Crypto Taxes', href: '/' },
    { name: 'Free Tools', href: '/' },
    { name: 'Resource Center', href: '/' },
  ];

  return (
    <div className={`${pathname === '/authentication' || pathname === '/authentication/login' || pathname === '/authentication/login/reset' ? "hidden" : "inline"}`}>
      {/* Larger screen navigation */}
      <nav className="bg-white px-2 sm:px-6 lg:px-12 hidden md:flex h-16 items-center justify-between shadow-md">
        <Image src={'/koinxLogo.svg'} width={80} height={67} alt="koinx-logo" />
        <div className={`items-center text-sm font-medium space-x-10 hidden md:flex md:space-x-10`}>
          {navItems.map((item, index) => (
            <Link key={index} href={item.href}><p className="hover:text-gray-500">{item.name}</p></Link>
          ))}
          <button
            style={{
              background: 'linear-gradient(81.62deg, #2870ea 8.72%, #1b4aef 85.01%)',
            }}
            className="text-white py-2 px-6 rounded-lg hover:brightness-110"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Smaller screens navigation */}
      <nav style={{ backdropFilter: 'blur(6.7px)' }} className={`shadow-md z-50 flex w-full md:hidden justify-between items-center sticky top-0 px-4`}>
        <Image src={'/koinxLogo.svg'} width={80} height={67} alt="koinx-logo" />
        <div onClick={() => setShowMenu(true)} className="p-1">
          {/* Hamburger Icon */}
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </div>
      </nav>

      {showMenu && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex">
          <div style={{ backdropFilter: 'blur(5.7px)' }} className=" bg-opacity-60 absolute top-0 left-0 right-0 bottom-0"></div>
          <button onClick={() => setShowMenu(false)} className="absolute top-4 right-4 rounded-full p-1 bg-white duration-300 text-black hover:bg-[#bebcbc]">
            <X size={23} />
          </button>
          <div className="bg-white rounded-lg p-4 text-black text-[20px] w-full mx-4 mt-14 z-10 h-fit">
            {navItems.map((item, index) => (
              <Link key={index} className="block py-4 border-b text-sm" onClick={() => setShowMenu(false)} href={item.href}>
                {item.name}
              </Link>
            ))}
            <div className="text-center py-3">
              <button
                style={{
                  background: 'linear-gradient(81.62deg, #2870ea 8.72%, #1b4aef 85.01%)',
                }}
                className="text-white text-sm py-2  px-6 w-full rounded-lg hover:brightness-110"
              >
                Get Started for Free
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
