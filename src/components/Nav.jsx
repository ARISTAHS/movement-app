import { Link } from 'react-router-dom';
// import '../style/Nav.css';
import styles from '../style/Nav.module.css';


function Nav(){
  return(
    <>
      <ul className={styles.nav}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/LogExercise">Log Exercise</Link></li>
        <li><Link to="/Statistics">Statistics</Link></li>
        <li><Link to="/Settings">Settings</Link></li>
      </ul>

      
    </>
  );
}

export default Nav;