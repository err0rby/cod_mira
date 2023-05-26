import React from "react";
import styles from "./main.module.scss";
import SliderList from "../../components/SliderList/SliderList";

import {ProductPage} from "../../components/Product/ProductPage"

import cow from "../../icons/cow.svg";
import koko from "../../icons/koko.svg";
import heart from "../../icons/heart.svg";
import product from "../../icons/product.svg";
import CardsMapper from "../../components/CardsMapper/CardsMapper";

const Main = () => {
  return (
    <>
      <SliderList />
      <div className={styles.infoBlock}>
        <h3>Promise — сервис для предзаказа настоящих фермерских продуктов</h3>
        <div className={styles.blocks}>
          <div>
            <img src={cow} alt="№" />
            <span>200 фермерских хозяйств</span>
          </div>
          <div>
            <img src={product} alt="№" />
            <span>200 фермерских продуктов</span>
          </div>
          <div>
            <img src={koko} alt="№" />
            <span>Контролируем качество от грядки до тарелки</span>
          </div>
          <div>
            <img src={heart} alt="№" />
            <span>Природный вкус в каждом продукте</span>
          </div>
        </div>
        <div className={styles.bg}></div>
        <ProductPage/>
      </div>
      <CardsMapper></CardsMapper>
    </>
  );
};

export default Main;
