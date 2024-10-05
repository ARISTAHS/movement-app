// import '../style/Header.css';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/fencing_logo.png';
import 'boxicons';


function Header() {
  return(
    <header className={styles.header}>
      <h1>
        <Link to="/" className={styles.logo}>
          <img src={LogoImg} alt="logo이미지입니다." />
        </Link>
      </h1>

      <ul className={styles.nav}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/LogExercise">Log Exercise</Link></li>
        <li><Link to="/Statistics">Statistics</Link></li>
        <li><Link to="/Settings">Settings</Link></li>
      </ul>

      <div className={styles.login}>
        <Link to="/login">
          <box-icon 
          type='regular'
          name='user'></box-icon><span>로그인</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;