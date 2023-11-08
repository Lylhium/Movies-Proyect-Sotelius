import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-6 bg-base-300'>
      <div>This Project was made by </div>
      <h1 className='justify-center text-orange-500 semi-bold pt-5 text-lg'>
        Agustin Pfarherr
      </h1>
      <div className='pt-5'> Project Repository: </div>
      <h1 className='justify-center text-orange-500 semi-bold pt-5 text-lg'>
        <Link
          href='https://github.com/Lylhium/Movies-Proyect-Sotelius'
          legacyBehavior
        >
          <a className='link link-hover' target='_blank'>
            Sotelius Movies
          </a>
        </Link>
      </h1>
      <div className='pt-5'> Personal Github: </div>
      <h1 className='justify-center text-orange-500 semi-bold pt-5 text-lg'>
        <Link href='https://github.com/Lylhium' legacyBehavior>
          <a className='link link-hover' target='_blank'>
            Agustín Github
          </a>
        </Link>
      </h1>
    </main>
  );
}
