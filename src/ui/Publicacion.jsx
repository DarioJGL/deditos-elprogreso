'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Publicacion.module.css';

export default function Publication({ title, summary, image, link }) {
  return (
    <article className={styles.publication}>
      <Image
        src={image}
        alt={title}
        width={250}
        height={250}
        className={styles.image}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.summary}>{summary}</p>
        <Link
          href={link}
          className={styles.link}
        >
          Leer más
        </Link>
      </div>
    </article>
  );
}
