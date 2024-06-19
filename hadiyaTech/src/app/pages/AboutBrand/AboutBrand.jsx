import AboutSite from "../../../components/pagesComponent/AboutSite/AboutSite"
import SiteGuarantee from "../../../components/pagesComponent/SiteGuarantee/SiteGuarantee"
import style from './AboutBrand.module.css'
import spa from '../../../assets/spa.mp4'

const AboutBrand = () => {
  return (
    <>
    <AboutSite />
    <div className={style.HeroContent}>
      <video autoPlay muted loop className={style.contentVideo}>
        <source src={spa} type="video/mp4" />
      </video>
      <h1>Массажеры Hadiya</h1>
      <button>В каталог</button>
    </div>
    <SiteGuarantee />
    </>
  )
}

export default AboutBrand;