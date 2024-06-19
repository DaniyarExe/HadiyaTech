import Slider from "react-slick";
import Card from "./Card/Card";
import style from "./CardView.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardView = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={style.container}>
      <div className={style.mainName}>
        <h1>Популярные товары</h1>
      </div>
      <div className={style.cards}>
        <Slider {...settings}>
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className={style.card}>
              <Card />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardView;
