import styles from '../Auth.module.css';

export default function LoginPage(){
  return(
    <div className={styles.login_wrap}>
      {/* <h2 className="login_title">로그인</h2> */}
      <form action="#" method='post' id={styles.login_form}>
        <h2 className={styles.login_title}>로그인</h2>
        <input type="text" name='userId' placeholder='아이디 입력'/>
        <input type="password" name='userPassword' placeholder='비밀번호 입력'/>
        <label htmlFor="remember_checkbox" className='rememeber_checkbox'>
          <input type="checkbox" className='checkbox'/>
        </label>
        <input type="submit" value="로그인"/>
      </form>
    </div>
  );
}