// import styles from './Content.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Content/Home/Home';
import LogExercise from '../components/Content/LogExercise/LogExercise';
import Statistics from '../components/Content/Statistics/Statistics';
import Settings from '../components/Content/Settings/Settings';
import ErrorPage from '../components/Error/ErrorPage';
import LoginPage from '../components/Login/Login';

function RoutesPage(){
  return(
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/LogExercise' element={<LogExercise />}></Route>
      <Route path='/Statistics' element={<Statistics />}></Route>
      <Route path='/Settings' element={<Settings />}></Route>
      <Route path="*" element={<ErrorPage />} />
      <Route path='/login' element={<LoginPage />}></Route>
    </Routes>
  );
}

export default RoutesPage;