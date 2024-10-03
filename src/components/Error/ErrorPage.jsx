import styles from './Error.module.css';
import { Link } from 'react-router-dom'; 

function ErrorPage(){
  return(
    <>
      <h1 className={styles.title}>에러페이지입니다.</h1>
      <Link to='/Home'></Link>
    </>
  );
}

export default ErrorPage;