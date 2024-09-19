import { Link, Route,Routes } from 'react-router-dom';
// import '../style/Nav.css';
import styles from '../style/Nav.module.css';


function Nav(){
  return(
    <>
      <ul className={styles.nav}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Nav2">Nav2</Link></li>
        <li><Link to="/Nav3">Nav3</Link></li>
      </ul>

      <Routes>
        <Route exact path='/'>Home</Route>
        <Route path='/Nav2'>네비2 관련 content 내용</Route>
        <Route path='/Nav3'>네비3 관련 content 내용</Route>
      </Routes>
    </>
  );
}

export default Nav;