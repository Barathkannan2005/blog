 import styles from './BuyerLoginComp.module.css';

const BuyerLoginComp = () => {
  return (
    <div className={styles.loginContainer}>
      <form className={styles.form}>
        <h2>Login Page</h2>
        <inputfl
          type="text"
          placeholder="Username"
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default BuyerLoginComp;