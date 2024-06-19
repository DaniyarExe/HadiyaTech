import style from "./DeliveryGuarantee.module.css"

const DeliveryGuarantee = () => {
  return (
    <>
        <section className={style.main}>
            <div className={style.infoGuarantee}>
                <h1>Доставка и гарантия</h1>
                <h4>Гарантийное обслуживание</h4>
                <p>Мы уверены в качестве товаров Hadiya, поэтому предоставляем бесплатную дополнительную гарантию до 1 года.</p>
                <p>Так же предоставляется дополнительное продленное обслуживание сроком на 5 лет при дополнительной оплате в 5000 рублей.</p> 
                <p>В рамках дополнительной и стандартной гарантии мы обеспечим бесплатную диагностику и ремонт в течение всего срока.</p>
                <p>Подробную информацию вы можете получить у наших продавцов-консультантов по телефону: +7 (961) 777-77-72</p>
            </div>
            <div className={style.setTestDrive}>
              <div className={style.setInfo}>
              <h1>Записаться на тест-драйв</h1>
              <div className={style.setName}>
                <p>Ваше имя</p>
                <input type="" placeholder="Введите имя"/>
            </div>
            <div className={style.setNumber}> 
                <p>Ваш номер телефона</p>
                <input type="text" placeholder="+7___ ___-__-__"/>
            </div>
            </div>
               <button>Отправить</button>
               <p>Отправляя заявку вы принимаете условия
               пользовательского соглашения</p>
            </div>
        </section>
    </>
  )
}

export default DeliveryGuarantee;