'use client';

import React from 'react';
import Publication from './Publicacion';
import styles from './Blog.module.css';
import posts from '@/data/posts.json';

export default function BlogSection() {
  return (
    <section className={styles.section}>
      {posts.map((post) => (
        <Publication
          key={post.id}
          title={post.title}
          summary={post.summary}
          image={post.image}
          link={post.link}
        />
      ))}
    </section>
  );
}
