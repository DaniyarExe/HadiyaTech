import style from "./Stores.module.css";
import { Map, YMaps } from '@pbe/react-yandex-maps';
import logo from "../../../assets/logo.svg"
import hadiya from "../../../assets/9b8d9db28071066dfe47dfa14799d6b5.jpg"

const Stores = () => {
  return (
    <>
    <section className={style.site}>
    <div className={style.container}>
      <h1 className={style.catalogHeading}>Магазины и пункты выдачи Hadiya</h1>
    </div>
    <div className={style.container}>
      <div className={style.contacts}>
        <div className={style.points}>
          <div className={style.pointBlock}>
            <div className={style.heading}>Екатеринбург</div>
            <div className={style.text}>Николая Никонова, 21</div>
          </div>
          <div className={style.pointBlock}>
            <div className={style.heading}>Время работы:</div>
            <div className={style.text}>Ежедневно<br /> с 10:00 - 19:00</div>
          </div>
          <div className={style.pointBlock}>
            <div className={style.heading}>Контакты</div>
            <div className={style.text}>
              <a href="">+7 (961) 777-77-72</a>
              <a href="">info@hadiya.tech</a>
             </div>
          </div>
        </div>
        <div className={style.mapContainer}>
          <YMaps>
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} width="818px" height="600px"/>
          </YMaps>
        </div>
      </div>
    </div>
    <div className={style.container}>
      <div className={style.contactsBorderlees}>
        <div >
          <div className={style.detailHeading}>
          Фирменный магазин Hadiya в Екатеринбурге
          </div>
          <div className={style.description}>
            <p>Приходите к нам в гости и получите бесплатный тест-драйв вашего кресла, а так же профессиональную консультацию в подборе под ваши потребности</p>
          </div>
          <div className={style.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={style.contactImage}>
            <img src={hadiya} alt="" />
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  );
}

export default Stores;
