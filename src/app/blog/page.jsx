'use client';

import React from 'react';
import BlogSection from '@/ui/BlogSeccion';
import styles from '@/ui/Blog.module.css';

export default function Blog() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Nuestro Blog</h1>
      <BlogSection />
    </main>
  );
}
