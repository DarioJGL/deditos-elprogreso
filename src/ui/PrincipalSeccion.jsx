import Image from 'next/image';
import styles from './Principal.module.css';

export default function Home() {
  return (
    <section className={styles['seccion-principal']}>
      <div className={styles.contenedor}>
        <h1 className={styles['titulo-principal']}>
          Deditos El Progreso en Galapa
        </h1>
        <p className={styles.descripcion}>
          En <strong>Deditos El Progreso</strong>, somos líderes en la
          fabricación de pasabocas congelados de alta calidad con el auténtico
          sabor tradicional de la región. Nuestra oferta incluye una deliciosa
          variedad de productos como deditos de queso, empanaditas de carne y
          pollo, y salchirollos, perfectos para desayunos, meriendas y eventos
          especiales. Cada producto está elaborado con ingredientes frescos y un
          cuidadoso proceso que garantiza su sabor y textura. Si buscas
          pasabocas prácticos y deliciosos para cualquier ocasión, Deditos El
          Progreso es tu mejor elección. ¡Descubre la tradición y calidad en
          cada bocado!
        </p>
        <a
          href=""
          className={styles['boton-cta']}
        >
          ¡Haz tu pedido ya!
        </a>
      </div>
      <div className={styles['contenedor-imagen']}>
        <Image
          src="/img-principal.jpg"
          alt="Imagen de productos de Deditos El Progreso"
          width={600}
          height={600}
          priority={true}
        />
      </div>
    </section>
  );
}
