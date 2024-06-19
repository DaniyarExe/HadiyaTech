import style from "./Card.module.css";
import card from "../../../../assets/Card.jpg";

const Card = () => {
  return (
    <section>
      <div className={style.main}>
        <img src={card} alt="Card image" />
        <div className={style.description}>
          <h2>Hadiya Sofiya</h2>
          <h1>274 500 ₽</h1>
        </div>
        <div className={style.itemColor}>
          <div className={style.color}></div>
          <div className={style.color}></div>
        </div>
      </div>
    </section>
  );
};

export default Card;
