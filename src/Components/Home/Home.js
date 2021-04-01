import React from "react";

import Product from "../Product/Prodcut";
import leanImage from "../../images/lean.jpeg";
import bookTwo from "../../images/book2.jpg";
import psImg from "../../images/psImage.jpg";
import xboxImg from "../../images/xboxImg.jpg";
import marioImg from "../../images/marioImg.jpg";
import tv from "../../images/tv.jpg";

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
            title="SAMSUNG UN65RU7300FXZA Curved 65-Inch 4K UHD 7 Series Ultra HD Smart TV with HDR and Alexa Compatibility (2019 Model)"
            price={789.99}
            image={tv}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
