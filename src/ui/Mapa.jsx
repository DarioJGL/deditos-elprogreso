'use client';

import styles from './Mapa.module.css';

export default function Mapa() {
  return (
    <section className={styles.mapaSeccion}>
      <h2 className={styles.titulo}>Nuestra Ubicación</h2>
      <p className={styles.descripcion}>
        Encuéntranos fácilmente en nuestra dirección y visítanos.
      </p>
      <div className={styles.mapaContenedor}>
        <iframe
          className={styles.mapa}
          title="Ubicación de Deditos El Progreso"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.73029637875817!2d-74.88725786865761!3d10.899581599137427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef5d46de6df3cff%3A0x66fac4a524bd80a5!2sCl.%2014%20%2317b-51%2C%20Galapa%2C%20Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1734632243589!5m2!1ses!2sco"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
