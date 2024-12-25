'use client';

import PostDetail from '@/ui/PostDetail';
import React from 'react';
import styles from '@/ui/Blog.module.css';
import Cta from '@/ui/Cta';

export default function PageBeneficios() {
  return (
    <main className={styles.container}>
      <PostDetail />
      <Cta />
    </main>
  );
}
