// import '../style/Header.css';
import styles from './Header.module.css'


function Header() {
  return(
    <div className={styles.header}>
      <h1 className={styles.logo}>
        Webpage Header Logo
      </h1>
    </div>
  );
}

export default Header;