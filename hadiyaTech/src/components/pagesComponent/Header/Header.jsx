import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import style from './Navbar.module.css';
import PopUp from '../../PopUp/PopUp';

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <NavLink to="/about-brand" className={style.a} activeClassName={style.active}>О бренде</NavLink>
        <NavLink to="/catalog" className={style.a} activeClassName={style.active}>Каталог</NavLink>
        <NavLink to="/delivery-and-guarantee" className={style.a} activeClassName={style.active}>Доставка и гарантия</NavLink>
        <NavLink to="/stores" className={style.a} activeClassName={style.active}>Магазины</NavLink>
      </nav>
      <Link to="/" className={style.headerLogo}>
        <img src={logo} alt="logo" />
      </Link>
      <nav className={style.nav}>
        <Link className={style.testDrive}>
          <svg
            className={style.playButton}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60"
            fill="currentColor"
          >
            <g>
              <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z" />
              <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z" />
            </g>
          </svg>
          Тест драйв
        </Link>
        <Link to="/catalog"><button>Подобрать</button></Link>
      </nav>
    </header>
  );
};

export default Header;
