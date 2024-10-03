import styles from './Footer.module.css';


function Footer(){
  return(
    <footer className={styles.footer}>
      <address className={styles.address}>
        <p className={styles.text}>
          Copyright 2024. 정호석 All rights reserved.
        </p>
      </address>
    </footer>
  );
}

export default Footer;