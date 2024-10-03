import styles from './Content.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import LogExercise from './LogExercise/LogExercise';
import Statistics from './Statistics/Statistics';
import Settings from './Settings/Settings';

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