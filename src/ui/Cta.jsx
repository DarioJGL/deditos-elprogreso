'use client';

import styles from './Cta.module.css';
import Link from 'next/link';

export default function Cta() {
  return (
    <section className={styles.cta}>
      <h2 className={styles.titulo}>¡Haz tu pedido ahora!</h2>
      <p className={styles.descripcion}>
        Contáctanos para más información y asegura tus pasabocas favoritos al
        por mayor y al detal.
      </p>
      <Link
        href="https://wa.me/3004148274?text=Estoy%20interesado%20en%20los%20pasabocas"
        className={styles.boton}
      >
        Escribenos por WhatsApp
      </Link>
      <p>ó</p>
      <Link
        href="/contacto"
        className={styles.boton}
      >
        Llena el formulario
      </Link>
    </section>
  );
}
