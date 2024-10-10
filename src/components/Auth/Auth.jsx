// import styles from './Auth.module.css';
import LoginForm from './Login/Login';
import SignForm from './Sign/Sign';
import { useState } from 'react';

//useState 보다 복잡한 상태관리를 위해 useReducer hook 사용예정
//useState로 먼저 구축 후 이후에 수정

export default function Auth(){

  // const [login, setLogin] = useState(true); //false : 회원가입(Sign)

  // const handleBtn()=>{
  //   setLogin(prevState => !prevState);
  // };

  return(
    <>
      {/* {login ? (<LoginForm/>) : (<SignForm/>)}

      <button >
        {login ? "회원가입 바로가기" : "로그인 하기"}
      </button> */}
      <LoginForm></LoginForm>
    </>
  );
}