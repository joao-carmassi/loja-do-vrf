import CarouselHome from './carosel-home';
import CarouselMarcasHome from './carousel-marcas-home';
import InfosHome from './infos-home';
import MostraProdutoMarcaHome from './mostra-produto-marca-home';
import CardsImgHome from './cards-img-home';
import { Separator } from '@/components/ui/separator';
import MiniCards from './mini-cards';

export default function Home() {
  return (
    <main>
      <h1 className='hidden'>
        Loja do VRF - Soluções em climatização VRF com qualidade e confiança
      </h1>
      <CarouselHome />
      <Separator className='bg-primary pt-1' />
      <InfosHome />
      <MiniCards />
      <MostraProdutoMarcaHome />
      <CarouselMarcasHome />
      <CardsImgHome />
    </main>
  );
}
