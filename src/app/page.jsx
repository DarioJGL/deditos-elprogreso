import ProductosDestacados from '@/ui/ProductosDestacados';
import PrincipalSeccion from '@/ui/PrincipalSeccion';
import OpinionesClientes from '@/ui/OpinionesClientes';
import Cta from '@/ui/Cta';
import Mapa from '@/ui/Mapa';

export default function Home() {
  return (
    <main className="">
      <PrincipalSeccion />
      <ProductosDestacados />
      <OpinionesClientes />
      <Mapa />
      <Cta />
    </main>
  );
}
