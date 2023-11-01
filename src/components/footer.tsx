import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <footer className='footer p-10 bg-base-200 text-base-content'>
      <aside>
        <div className='text-5xl'>📽️</div>
        <p>made by</p>
        <div className='font-bold text-orange-500'>Agustín Pfarherr</div>
      </aside>

      <nav>
        <header className='footer-title'>About Me</header>
        <Link href='https://github.com/Lylhium' legacyBehavior>
          <a className='link link-hover' target='_blank'>
            Agustín Github
          </a>
        </Link>
      </nav>
      <nav>
        <header className='footer-title'>More</header>
        <Link
          href='https://github.com/Lylhium/Movies-Proyect-Sotelius'
          legacyBehavior
        >
          <a className='link link-hover' target='_blank'>
            Project Repository
          </a>
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
