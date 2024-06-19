import style from "./SiteGuarantee.module.css"

const SiteGuarantee = () => {
  return (
    <section>
        <div className={style.mainGuarantee}>
            <div className={style.guarantee}>
                <h1><span className={style.colorText}>5 лет</span> <span className={style.guaranteeText}>гарантии</span></h1>
                <a href="delivery-and-guarantee"><button>Подробнее</button></a>
            </div>
            <div className={style.infoGuarantee}>
                <p className={style.infoText}>Мы уверены в качестве товаров Hadiya, поэтому предоставляем бесплатную дополнительную гарантию до 1 года.</p>
                <p>Так же предоставляется дополнительное продленное обслуживание сроком на 5 лет при дополнительной оплате.</p>
            </div>
            <div className={style.contactGuarantee}>
                <p className={style.infoText}   >В рамках дополнительной и стандартной гарантии мы обеспечим бесплатную диагностику и ремонт в течение всего срока.</p>
                <p>Подробную информацию вы можете получить у наших продавцов-консультантов по телефону:
                +7 (961) 777-77-72</p>
            </div>
        </div>
    </section>
  )
}

export default SiteGuarantee