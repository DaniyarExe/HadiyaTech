import AboutSite from '../../../components/pagesComponent/AboutSite/AboutSite'
import CardView from '../../../components/pagesComponent/CardView/CardView'
import ChoiceProduct from '../../../components/pagesComponent/ChoiceProduct/ChoiceProduct'
import HeroContent from '../../../components/pagesComponent/HeroContent/HeroContent'
import InfoContent from '../../../components/pagesComponent/InfoContent/InfoContent'
import SiteGuarantee from '../../../components/pagesComponent/SiteGuarantee/SiteGuarantee' 

const Home = () => {
  return (
    <>
     <InfoContent />
     <ChoiceProduct />
     <CardView />
     <AboutSite />
     <HeroContent  />
     <SiteGuarantee />
    </>
  )
}

export default Home