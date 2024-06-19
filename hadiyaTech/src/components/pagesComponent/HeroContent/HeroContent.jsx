import style from "./HeroContent.module.css";
import waves from "../../../assets/7666608-hd_1920_1080_30fps.mp4";

const HeroContent = () => {
  return (
    <div className={style.HeroContent}>
      <video autoPlay muted loop className={style.contentVideo}>
        <source src={waves} type="video/mp4" />
      </video>
      <h1>Подарите себе релакс</h1>
      <button>В каталог</button>
    </div>
  );
}

export default HeroContent;
