'use client';

import Image from 'next/image';
import Link from 'next/link';
import Cta from '@/ui/Cta';
import styles from '@/ui/Productos.module.css';

const productos = [
  {
    id: 1,
    nombre: 'Deditos de Queso',
    descripcion:
      'Deliciosos deditos de queso con masa crujiente y relleno cremoso.',
    imagen: '/pro-deditosqueso.jpg',
    whatsapp:
      'https://wa.me/+573004148274?text=Quiero%20pedir%20Deditos%20de%20Queso',
  },
  {
    id: 2,
    nombre: 'Deditos de Bocadillo',
    descripcion: 'Un toque dulce con bocadillo en su interior y masa crocante.',
    imagen: '/pro-deditosbocadillo.jpg',
    whatsapp:
      'https://wa.me/+573004148274?text=Quiero%20pedir%20Deditos%20de%20Bocadillo',
  },
  {
    id: 3,
    nombre: 'Empanaditas de Pollo',
    descripcion: 'Pequeñas empanadas rellenas de pollo sazonado y jugoso.',
    imagen: '/pro-empanadaspollo.jpg',
    whatsapp:
      'https://wa.me/+573004148274?text=Quiero%20pedir%20Empanaditas%20de%20Pollo',
  },
  {
    id: 4,
    nombre: 'Empanaditas de Carne',
    descripcion: 'Empanadas mini rellenas de carne molida condimentada.',
    imagen: '/pro-empanadascarne.jpg',
    whatsapp:
      'https://wa.me/+573004148274?text=Quiero%20pedir%20Empanaditas%20de%20Carne',
  },
  {
    id: 5,
    nombre: 'Medallones de Salchichas',
    descripcion:
      'Medallones crujientes con salchicha en su interior, ideales para snacks.',
    imagen: '/pro-salchirollos.jpg',
    whatsapp:
      'https://wa.me/+573004148274?text=Quiero%20pedir%20Medallones%20de%20Salchichas',
  },
  {
    id: 6,
    nombre: 'Deditos de Queso Grandes',
    descripcion:
      'Deditos de queso en tamaño grande para disfrutar más del sabor.',
    imagen: '/pro-deditosgrandes.jpg',
    whatsapp:
      'https://wa.me/+573004148274?text=Quiero%20pedir%20Deditos%20de%20Queso%20Grandes',
  },
];

export default function Productos() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Nuestros Productos</h1>
      <div className={styles.grid}>
        {productos.map((producto) => (
          <div
            key={producto.id}
            className={styles.card}
          >
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              width={300}
              height={300}
              className={styles.image}
            />
            <h2 className={styles.productTitle}>{producto.nombre}</h2>
            <p className={styles.description}>{producto.descripcion}</p>
            <Link
              href={producto.whatsapp}
              target="_blank"
              className={styles.link}
            >
              Pedir por WhatsApp
            </Link>
          </div>
        ))}
      </div>
      <Cta />
    </main>
  );
}
