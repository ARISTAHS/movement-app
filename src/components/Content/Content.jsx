import styles from './Content.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import LogExercise from './LogExercise/LogExercise';
import Statistics from './Statistics/Statistics';
import Settings from './Settings/Settings';
import ErrorPage from '../Error/ErrorPage';

function Content(){
  return(
    <div className={styles.content_wrap}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/LogExercise' element={<LogExercise />}></Route>
        <Route path='/Statistics' element={<Statistics />}></Route>
        <Route path='/Settings' element={<Settings />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default Content;