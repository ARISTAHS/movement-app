import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import LogExercise from './LogExercise';
import Statistics from './Statistics';
import Settings from './Settings';

function Content(){
  return(
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/LogExercise' element={<LogExercise />}></Route>
        <Route path='/Statistics' element={<Statistics />}></Route>
        <Route path='/Settings' element={<Settings />}></Route>
      </Routes>
  );
}

export default Content;