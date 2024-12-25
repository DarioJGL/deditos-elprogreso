'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuActivo, setMenuActivo] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuActivo(!menuActivo);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.barra-navegacion')) {
        setMenuActivo(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const links = [
    {
      id: 1,
      texto: 'Inicio',
      ruta: '/',
    },
    {
      id: 2,
      texto: 'Productos',
      ruta: '/productos',
    },
    {
      id: 3,
      texto: 'Quiénes Somos',
      ruta: '/quienes-somos',
    },
    {
      id: 4,
      texto: 'Blog',
      ruta: '/blog',
    },
  ];

  return (
    <nav className="barra-navegacion">
      {/* Botón Hamburguesa */}
      <button
        className="boton-hamburguesa"
        aria-label="Menú"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Enlaces de navegación */}
      <ul className={`enlaces-navegacion ${menuActivo ? 'activo' : ''}`}>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link
                className={`link 
                  ${pathname === link.ruta ? 'click' : ''}
                `}
                href={link.ruta}
              >
                {link.texto}
              </Link>
            </li>
          );
        })}

        <li key={5}>
          <Link
            className={`link link-oculto
              ${pathname === '/contacto' ? 'click' : ''}
            `}
            href={'/contacto'}
          >
            Contacto
          </Link>
        </li>
      </ul>

      {/* Logo */}
      <div className="logo">
        <Image
          src="/logo-elprogreso.svg"
          alt="Logo Deditos El Progreso"
          width={100}
          height={100}
          priority={true}
          className="logo-imagen"
        />
      </div>

      {/* Redes Sociales */}
      <div className="redes-sociales">
        <Link
          className={`link oculto
              ${pathname === '/contacto' ? 'click' : ''}
            `}
          href={'/contacto'}
        >
          Contacto
        </Link>
        <Link
          href=""
          className=""
        >
          <Image
            src="/facebook-logo.svg"
            alt="logo de facebook"
            width={24}
            height={24}
          />
        </Link>
        <Link
          href=""
          className=""
        >
          <Image
            src="/instagram-logo.svg"
            alt="logo de instagram"
            width={24}
            height={24}
          />
        </Link>
        <Link
          href=""
          className=""
        >
          <Image
            src="/whatsapp-logo.svg"
            alt="logo de whatsapp"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </nav>
  );
}
