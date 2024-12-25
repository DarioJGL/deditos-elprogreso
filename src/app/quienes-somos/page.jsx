'use client';

import Cta from '@/ui/Cta';
import styles from '@/ui/QuienesSomos.module.css';

export default function QuienesSomos() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h1 className={styles.title}>¿Quiénes Somos?</h1>
          <p className={styles.paragraph}>
            Somos una empresa dedicada a la elaboración y comercialización de
            deditos congelados de alta calidad, brindando soluciones
            alimenticias prácticas y deliciosas a nuestros clientes en Galapa y
            alrededores. Nos distinguimos por nuestro sabor único, atención
            personalizada y compromiso con la satisfacción de nuestros
            consumidores.
          </p>
        </div>

        <div className={styles.missionVisionContainer}>
          <div className={styles.section}>
            <h2 className={styles.subtitle}>Misión</h2>
            <p className={styles.paragraph}>
              Somos una empresa dedicada a la elaboración y comercialización de
              deditos congelados de alta calidad, brindando soluciones
              alimenticias prácticas y deliciosas a nuestros clientes en Galapa
              y alrededores. Nos distinguimos por nuestro sabor único, atención
              personalizada y compromiso con la satisfacción de nuestros
              consumidores.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subtitle}>Visión</h2>
            <p className={styles.paragraph}>
              Para 2027, seremos reconocidos como la empresa líder en la
              producción y distribución de deditos congelados en el departamento
              del Atlántico, destacándonos por nuestra calidad, innovación en
              productos y excelencia en el servicio al cliente, con una sólida
              presencia en el mercado regional y un compromiso constante con el
              desarrollo sostenible de nuestra comunidad.
            </p>
          </div>
        </div>

        <div className={styles.section + ' ' + styles.values}>
          <h2 className={styles.subtitle}>Valores Corporativos</h2>
          <ul className={styles.list}>
            <li>Calidad Superior</li>
            <li>Innovación Constante</li>
            <li>Compromiso con la Sostenibilidad</li>
            <li>Atención Personalizada</li>
            <li>Excelencia en el Servicio</li>
            <li>Trabajo en Equipo</li>
            <li>Responsabilidad Social</li>
          </ul>
        </div>
      </div>
      <Cta />
    </main>
  );
}
