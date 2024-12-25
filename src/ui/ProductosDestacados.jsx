import Link from 'next/link';
import styles from './ProductosDestacados.module.css';
import Image from 'next/image';

const ProductosDestacados = () => {
  const productos = [
    {
      id: 1,
      nombre: 'Deditos de Queso',
      descripcion:
        'Deliciosos deditos de queso con una textura crujiente y un sabor irresistible.',
      imagen: '/deditos-queso.jpg', // Cambia a la ruta correcta de tu imagen
    },
    {
      id: 2,
      nombre: 'Empanaditas',
      descripcion:
        'Crocantes empanaditas rellenas con pollo o carne, perfectas para cualquier ocasión.',
      imagen: '/empanaditas.jpg', // Cambia a la ruta correcta de tu imagen
    },
    {
      id: 3,
      nombre: 'Medallón de Salchicha',
      descripcion:
        'Sabrosos medallones de salchicha, ideales para desayunos o meriendas.',
      imagen: '/medallon-salchicha.jpg', // Cambia a la ruta correcta de tu imagen
    },
  ];

  return (
    <section className={styles.productosDestacados}>
      <h2 className={styles.titulo}>Productos Destacados</h2>
      <div className={styles.grid}>
        {productos.map((producto) => (
          <div
            key={producto.id}
            className={styles.card}
          >
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              className={styles.imagen}
              width={300}
              height={300}
            />
            <h3 className={styles.nombre}>{producto.nombre}</h3>
            <p className={styles.descripcion}>{producto.descripcion}</p>
            <Link href="/productos">
              <button className={styles.boton}>Ver más</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductosDestacados;
