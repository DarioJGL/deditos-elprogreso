import { Poppins, Roboto } from 'next/font/google';
import NavBar from '../ui/NavBar';
import Footer from '../ui/Footer';
import Cta from '../ui/Cta';
import './globals.css';

export const metadata = {
  title: 'Deditos El Progreso | Sabores que unen familias',
  description:
    'Disfruta de deliciosos pasabocas congelados hechos con amor y tradición. Perfectos para tus reuniones y momentos especiales.',
  keywords: [
    'deditos el progreso',
    'pasabocas congelados',
    'alimentos congelados',
    'recetas fáciles',
    'tradición culinaria',
    'productos deliciosos',
    'pasabocas en galapa',
    'pasabocas en atlántico',
    'pasabocas en barranquilla',
  ],
  author: 'Equipo Deditos El Progreso',
  icons: {
    icon: '/favicon.ico',
    appleTouchIcon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.deditoselprogreso.com',
    title: 'Deditos El Progreso | Sabores que unen familias',
    description:
      'Descubre nuestros deliciosos pasabocas congelados, ideales para compartir en cualquier ocasión.',
    images: [
      {
        url: '/img-principal.jpg',
        width: 1200,
        height: 630,
        alt: 'Deditos El Progreso - Pasabocas congelados deliciosos',
      },
    ],
    siteName: 'Deditos El Progreso',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@deditosprogreso',
    title: 'Deditos El Progreso | Sabores que unen familias',
    description:
      'Disfruta de deliciosos pasabocas congelados hechos con amor y tradición.',
    image: '/img-principal.jpg',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.deditoselprogreso.com',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
          type="image/x-icon"
        />
      </head>
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
        <header>
          <NavBar></NavBar>
        </header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
