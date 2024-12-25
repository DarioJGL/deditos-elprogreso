'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import posts from '@/data/posts.json'; // Asegúrate de que el JSON esté ubicado en esta ruta
import styles from './PostDetail.module.css';

export default function PostDetail() {
  const { id } = useParams(); // Obtén el ID desde la URL
  const post = posts.find((item) => item.id === parseInt(id)); // Encuentra la publicación según el ID

  if (!post) {
    return <div className={styles.notFound}>Publicación no encontrada</div>;
  }

  return (
    <article className={styles.post}>
      <Image
        src={post.image}
        alt={post.title}
        className={styles.image}
        width={960}
        height={540}
      />
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.summary}>{post.summary}</p>
      <div className={styles.content}>
        {post.content.map((section, index) => (
          <section key={index}>
            <h2 className={styles.heading}>{section.heading}</h2>
            <p className={styles.text}>{section.text}</p>
          </section>
        ))}
      </div>
      <div className={styles.meta}>
        <p>Autor: {post.author.name}</p>
        <p>Fecha: {post.date}</p>
        <p>Tiempo de lectura: {post.readingTime}</p>
      </div>
    </article>
  );
}
