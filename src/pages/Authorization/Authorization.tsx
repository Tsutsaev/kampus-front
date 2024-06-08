import { FC } from "react";
import styles from "./authorization.module.scss";
import { Outlet } from "react-router-dom";
import logo from "../../assets/logo_red.png";
import { Link } from "react-router-dom";

const Authorization: FC = () => {
  return (
    <div className={styles.auth}>
      <header className={styles.header}>
       
        <div className={styles.signIn_signUp}>
          <Link to={`/signIn`}>
            <div className={styles.btn_signIn}>Войти</div>
          </Link>
          <Link to={`/signUp`}>
            <div className={styles.btn_signUp}>Зарегистрироваться</div>
          </Link>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Authorization;