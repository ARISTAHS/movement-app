import styles from '../Auth.module.css';

export default function LoginPage(){

  function handleBtn(e){
    e.preventDefault();
    console.log('전송테스트');

  }

  return(
    <div className={styles.login_wrap}>
      {/* <h2 className="login_title">로그인</h2> */}
      <form action="#" method='post' id={styles.login_form}>

        <h2 className={styles.login_title}>로그인</h2>

        <input className={styles.idInput} type="text" name='userId' placeholder='아이디 입력'/>
        <input className={styles.passInput} type="password" name='userPassword' placeholder='비밀번호 입력'/>

        <label htmlFor="remember_checkbox" className={styles.rememeber_checkbox}>
          <input type="checkbox" className={styles.checkbox}/>
          <span className={styles.boxText}>아이디 기억하기</span>
        </label>

        <button onClick={handleBtn} className={styles.submitBtn} type="button">로그인</button>

      </form>
    </div>
  );
}