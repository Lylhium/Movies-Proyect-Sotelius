"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useMediaQuery } from "@react-hook/media-query";

export default function Navbar() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (e: any) => {
      if (
        isSearchOpen &&
        searchInputRef.current &&
        // @ts-ignore
        !searchInputRef.current.contains(e.target)
      ) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isSearchOpen]);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className='navbar bg-base-100 sticky top-0' style={{ zIndex: 1000 }}>
      <div className='navbar-start md:pl-6'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <Link href='/'>
              <li>
                <a>Homepage</a>
              </li>
            </Link>
            <Link href='/movies'>
              <li>
                <a>Movies</a>
              </li>
            </Link>
            <Link href='/about'>
              <li>
                <a>About us</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <Link href='/'>
        <div
          className={
            isMobile
              ? "text-center md:text-left"
              : "navbar-center text-center md:text-left"
          }
        >
          <a
            className={
              isMobile
                ? "btn btn-ghost normal-case text-md"
                : "btn btn-ghost normal-case text-xl"
            }
          >
            🎬 <a className='text-orange-500'>Sotelius</a> Movies
          </a>
        </div>
      </Link>
      <div className='navbar-end'>
        <button className='btn btn-ghost btn-circle' onClick={toggleSearch}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
      </div>

      {isSearchOpen && (
        <div
          className='absolute top-16 left-0 w-full transition-transform transform translate-y-0'
          ref={searchInputRef}
        >
          <input
            type='text'
            placeholder='Buscar...'
            className='input input-bordered w-full pl-10 pr-5 m-auto'
          />
        </div>
      )}
    </div>
  );
}
