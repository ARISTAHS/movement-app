import styles from '../style/Content.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Content/Home';
import LogExercise from './Content/LogExercise';
import Statistics from './Content/Statistics';
import Settings from './Content/Settings';

function Content(){
  return(
    <div id={styles.wrap}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/LogExercise' element={<LogExercise />}></Route>
        <Route path='/Statistics' element={<Statistics />}></Route>
        <Route path='/Settings' element={<Settings />}></Route>
      </Routes>
    </div>
  );
}

export default Content;