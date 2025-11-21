import CarouselHome from './carosel-home';
import CarouselMarcasHome from './carousel-marcas-home';
import InfosHome from './infos-home';
import MostraProdutoMarcaHome from './mostra-produto-marca-home';
import CardsImgHome from './cards-img-home';

export default function Home() {
  return (
    <main>
      <CarouselHome />
      <InfosHome />
      <MostraProdutoMarcaHome />
      <CarouselMarcasHome />
      <CardsImgHome />
    </main>
  );
}
