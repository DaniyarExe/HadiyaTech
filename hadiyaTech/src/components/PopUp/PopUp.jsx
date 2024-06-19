import { useState } from "react";
import style from "./PopUp.module.css"

const PopUp = () => {

    const [ modal, setModal ] = useState(false)

  return (
    <>
        <div className={style.container}>
            <div className={style.headingText}>
                <h1>Получить персональную скидку</h1>
            </div>
            <div className={style.confirmRequest}>
                <div className={style.name}>
                    <p>Ваше имя</p>
                <input type="text" placeholder="Введите имя"/>
                </div>
                <div className={style.number}>
                    <p>Ваш номер телефона</p>
                    <input type="text" placeholder="+7___ ___-__-__"/>
                </div>
                <div className={style.confirmButton}>
                    <button>Отправить</button>
                </div>
                <p>Отправляя заявку вы принимаете условия
                пользовательского соглашения</p>
            </div>
        </div>
    </>
  ) 
};

export default PopUp;