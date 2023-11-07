"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useMediaQuery } from "@react-hook/media-query";

export default function Navbar() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (e: any) => {
      if (
        isSearchOpen &&
        searchInputRef.current &&
        //@ts-ignore
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

  const isMobile = useMediaQuery("(max-width: 768px)") || false;

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
            <li>
              <Link href='/' legacyBehavior>
                <a>Homepage</a>
              </Link>
            </li>
            <li>
              <Link href='/movie' legacyBehavior>
                <a>Movies</a>
              </Link>
            </li>
            <li>
              <Link href='/about' legacyBehavior>
                <a>About me</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          isMobile
            ? "navbar-center text-center md:text-left"
            : "navbar-center text-center md:text-left"
        }
      >
        <div
          className={
            isMobile
              ? "navbar-center text-center md:text-left"
              : "navbar-center text-center md:text-left"
          }
        >
          <Link href='/' legacyBehavior>
            <a
              className={
                isMobile
                  ? "btn btn-ghost normal-case text-lg"
                  : "btn btn-ghost normal-case text-lg"
              }
            >
              🎬 <span className='text-orange-500'>Sotelius</span> Movies
            </a>
          </Link>
        </div>
      </div>
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
            placeholder='Search...'
            className='input input-bordered w-full pl-10 pr-5 m-auto'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link
            legacyBehavior
            href={`/search/${encodeURIComponent(searchTerm)}`}
          >
            <button className='btn bg-orange-500 text-white'>
              <a>Search</a>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
