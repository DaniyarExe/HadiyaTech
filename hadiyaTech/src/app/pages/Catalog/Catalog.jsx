import SiteGuarantee from "../../../components/pagesComponent/SiteGuarantee/SiteGuarantee";
import style from "./Catalog.module.css"
import massager from "../../../assets/6c83d515680bf7b32e3dbf8c3b13d9c1.png";
import chair from "../../../assets/cef20fbf820442e3c6ab1e4434ac20f9.png";


const Catalog = () => {
  return (
    <>
    <h1 className={style.Text}>Каталог массажного оборудования Hadiya</h1>
    <section>
      <div className={style.main}>
        <a href="#">
          <div className={style.massager}>
            <img src={massager} alt="Массажёр" />
            <h1>Массажёры</h1>
          </div>
        </a>

        <a href="#">
          <div className={style.chair}>
            <img src={chair} alt="Кресла" />
            <h1>Кресла</h1>
          </div>
        </a>
      </div>
    </section>
    <SiteGuarantee />
    </>
  )
}

export default Catalog;