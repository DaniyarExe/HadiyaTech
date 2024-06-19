import style from './AboutSite.module.css';
import girlInMassager from "../../../assets/pixelcut-export.jpeg";

const AboutSite = () => {
  return (
    <div className={style.container}>
      <div className={style.aboutHeader}>
        <h1>О КОМПАНИИ</h1>
      </div>
      <div className={style.aboutContent}>
        <img src={girlInMassager} alt="Girl in Massager" />
        <div className={style.description}>
            <h1>Массажное оборудование Hadiya — это продукция, доступная каждому</h1>
            <p>Мы стремимся создавать для вас массажные кресла и массажеры, которые помогут улучшению здоровья и помогут как людям, занимающимся активным спортом, так и тем, кто предпочитает проводить время в домашнем комфорте.</p>
            <p>Одним из главных преимуществ нашей продукции является цена, мы стремимся сделать массажные кресла не предметом роскоши, а полезным аксессуаром, который должен быть в каждом доме!</p>
            <div className={style.aboutButton}>
            <a href="Catalog/"><button>Подробнее</button></a>
           </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSite;
