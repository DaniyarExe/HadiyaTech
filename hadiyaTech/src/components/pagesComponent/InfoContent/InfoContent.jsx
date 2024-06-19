import style from "./InfoContent.module.css"
import natureVideo from '../../../assets/1448735-uhd_4096_2160_24fps.mp4'

const InfoContent = () => {
  return (
    <div className={style.content}>
            <video autoPlay muted loop className={style.contentVideo}>
                <source src={natureVideo} type="video/mp4"/>
              </video>
            <h1>Забота о вашем
            прекрасном теле</h1>
            <a href="catalog"><button>Подобрать массажер</button></a>
        </div>
  )
}

export default InfoContent