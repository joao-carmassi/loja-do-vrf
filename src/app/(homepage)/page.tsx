import CarouselHome from './carosel-home';
import CarouselMarcasHome from './carousel-marcas-home';
import ImgsHome from './imgs-home';
import InfosHome from './infos-home';
import MostraProdutoMarcaHome from './mostra-produto-marca-home';
import CardsImgHome from './cards-img-home';

export default function Home() {
  return (
    <main>
      <CarouselHome />
      <InfosHome />
      <ImgsHome />
      <MostraProdutoMarcaHome />
      <CarouselMarcasHome />
      <CardsImgHome />
    </main>
  );
}
