'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor-footer">
        {/* Información de contacto */}
        <div className="contacto">
          <h3>Contacto</h3>
          <p>
            <strong>Teléfono 1:</strong>{' '}
            <Link
              className="telefono"
              href="https://wa.me/+573004148274?text=Estoy%20interesado%20en%20los%20pasabocas"
            >
              +57 300 414 8274
            </Link>
          </p>

          <p>
            <strong>Teléfono 2:</strong>{' '}
            <Link
              className="telefono"
              href="https://wa.me/+573002824169?text=Estoy%20interesado%20en%20los%20pasabocas"
            >
              +57 300 282 4169
            </Link>
          </p>
          <p>
            <strong>Email: </strong>
            <a
              className="email"
              href="mailto:deditoselprogreso@gmail.com"
            >
              deditoselprogreso@gmail.com
            </a>
          </p>
          <p>
            <strong>Dirección:</strong> Calle 14 # 17B - 51 Galapa, Atlántico,
            Colombia
          </p>
        </div>

        {/* Redes sociales */}
        <div className="redes-sociales-footer">
          <h3>Síguenos</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/deditoselprogreso"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/DeditosElProgreso"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/DeditosElProgreso"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/DeditosElProgreso"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>

        {/* Enlace rápido */}
        <div className="enlace-rapido">
          <h3>Enlace rápido</h3>
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/productos">Nuestros productos</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contacto">Cotizaciones</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="derechos-reservados">
        <p>&copy; 2024 Deditos El Progreso. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
