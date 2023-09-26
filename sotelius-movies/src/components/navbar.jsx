"use client";
import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Input,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";

export default function Navbarr() {
  return (
    <Navbar className='sticky top-0'>
      <NavbarContent className='flex justify-between items-center'>
        <div className='flex items-center'>
          <AcmeLogo />
          <Link color='foreground' href='/'>
            <p className='font-bold text-inherit ml-2'>Sotelius Movies</p>
          </Link>
          <NavbarItem>
            <Link color='foreground' href='/movies'>
              Movies
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href='/about' aria-current='page'>
              About us
            </Link>
          </NavbarItem>
        </div>
        <div className='flex items-center '>
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",

              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder='Type to search...'
            size='sm'
            type='search'
          />
        </div>
      </NavbarContent>
    </Navbar>
  );
}
