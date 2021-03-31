import React from "react";

import Product from "../Product/Prodcut";
import leanImage from "../../images/leanstart.jpeg";
import bookTwo from "../../images/book2.jpg";
import psImg from "../../images/psImage.jpg";
import xboxImg from "../../images/xboxImg.jpg";
import marioImg from "../../images/marioImg.jpg";
import faceMaskImg from "../../images/faceMaskImg.jpg";

import "./Home.css";
import amazonBanner from "../../images/amazon_banner.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={amazonBanner} alt="" />

        <div className="home__row">
          <Product
            id="12323145"
            title="The lean Startup"
            price={29.99}
            image={leanImage}
            rating={5}
          />
          <Product
            id="2356563"
            title="Faucian Bargain: The Most Powerful and Dangerous Bureaucrat in American History"
            price={32.75}
            image={bookTwo}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="2356r3563"
            title="$20 PlayStation Store Gift Card [Digital Code]"
            price={20.5}
            image={psImg}
            rating={3}
          />
          <Product
            id="23563453"
            title="$10 Xbox Gift Card [Digital Code]"
            price={10}
            image={xboxImg}
            rating={5}
          />
          <Product
            id="23er436563"
            title="$10 Nintendo eShop Gift Card [Digital Code]"
            price={10}
            image={marioImg}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="2356563"
            title="Face Shield Safety Reusable 4PCS【Updated Version】Anti-Fog Wide Visor Spitting Anti-Fog Lens Lightweight Face Shield with for Men and Women"
            price={9.99}
            image={faceMaskImg}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
