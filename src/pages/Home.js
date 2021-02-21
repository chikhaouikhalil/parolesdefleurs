import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Home = () => {
  return (
    <div style={{ margin: "20px" }}>
      <Carousel infiniteLoop autoPlay>
        <img src="https://image.freepik.com/vecteurs-libre/beurre-arachide-realiste-horizontal-pour-publicite-texte-modifiable-produit-marque-images-haricots-arachis_1284-29379.jpg" />

        <img src="https://image.freepik.com/vecteurs-libre/beurre-arachide-realiste-horizontal-pour-publicite-texte-modifiable-produit-marque-images-haricots-arachis_1284-29379.jpg" />

        <img src="https://image.freepik.com/vecteurs-libre/beurre-arachide-realiste-horizontal-pour-publicite-texte-modifiable-produit-marque-images-haricots-arachis_1284-29379.jpg" />
      </Carousel>
    </div>
  );
};

export default Home;
