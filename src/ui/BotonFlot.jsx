'use client';

import React from 'react';
import styles from './BotonFlot.module.css'; // Archivo CSS para estilos

export default function BotonFlot({ link, iconSrc, altText }) {
  return (
    <a
      href={link}
      className={styles.botonFlot}
      target="_blank"
      aria-label="Chat en WhatsApp"
      rel="noopener noreferrer" // Seguridad para enlaces externos
    >
      <img
        src={iconSrc}
        alt={altText}
        className={styles.botonIcon}
      />
    </a>
  );
}

BotonFlot.defaultProps = {
  link: 'https://wa.me/+573004148274?text=Estoy%20interesado%20en%20los%20pasabocas', // Enlace predeterminado
  iconSrc: '/whats-icon.svg', // Ruta predeterminada del ícono
  altText: 'WhatsApp', // Texto alternativo predeterminado
};
