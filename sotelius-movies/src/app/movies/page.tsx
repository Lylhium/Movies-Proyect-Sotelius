"use client";

import CardUI from "@/components/card";
import Image from "next/image";
import React from "react";
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 '>
      <h1> movie landing </h1>
      <CardUI />
    </main>
  );
}
