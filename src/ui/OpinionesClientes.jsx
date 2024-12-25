import styles from './OpinionesClientes.module.css';

const OpinionesClientes = () => {
  const opiniones = [
    {
      id: 1,
      nombre: 'María López',
      texto:
        'Los deditos de queso son los mejores que he probado. ¡Excelente calidad y sabor!',
    },
    {
      id: 2,
      nombre: 'Juan Pérez',
      texto:
        'Las empanaditas son perfectas para cualquier ocasión. Muy crujientes y deliciosas.',
    },
    {
      id: 3,
      nombre: 'Ana García',
      texto:
        'El medallón de salchicha es mi favorito. Siempre lo recomiendo a mis amigos.',
    },
    {
      id: 4,
      nombre: 'Carlos Gómez',
      texto:
        'Excelente servicio y productos frescos. ¡Siempre quedo satisfecho con mis pedidos!',
    },
    {
      id: 5,
      nombre: 'Lucía Martínez',
      texto:
        'La atención al cliente es maravillosa. Los productos siempre llegan a tiempo y frescos.',
    },
    {
      id: 6,
      nombre: 'Pedro Ramírez',
      texto:
        'La calidad de los productos es impresionante. Siempre los compro para reuniones familiares.',
    },
  ];

  return (
    <section className={styles.opinionesClientes}>
      <h2 className={styles.titulo}>Opiniones de Nuestros Clientes</h2>
      <div className={styles.grid}>
        {opiniones.map((opinion) => (
          <div
            key={opinion.id}
            className={styles.card}
          >
            <p className={styles.descripcion}>"{opinion.texto}"</p>
            <h3 className={styles.nombre}>{opinion.nombre}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpinionesClientes;
