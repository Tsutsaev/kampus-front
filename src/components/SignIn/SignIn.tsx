import { ChangeEvent, FC, useState } from "react";
import styles from "./signin.module.scss";
import { authSignIn } from "../../features/applicationSlice";
import { useNavigate } from "react-router-dom";
//import eye from "../../assets/icons/eye.png";
import { useAppDispatch, useAppSelector } from "../../app/hooks/useAppDispatch";
import { Link } from "react-router-dom";

const SignIn: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loading = useAppSelector((state) => state.applicationSlice.loading);
  const error = useAppSelector((state) => state.applicationSlice.error);

  const handleSetPass = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSetName = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handleSignIn = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(authSignIn({ login, password }));
    navigate("/");
  };

  if (error) {
    return <div>{error}</div>;
  } else if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.signIn}>
      <div className={styles.inputs}>
      <h1>Вход</h1>
        <form data-testid="form" onSubmit={handleSignIn}>
          <span>Имя</span>
          <input
            data-testid="login"
            type="text"
            value={login}
            onChange={handleSetName}
          />
          <div className={styles.password}>
            <span>Пароль</span>
          </div>
          <input
            data-testid="password"
            type="password"
            value={password}
            onChange={handleSetPass}
          />
          <span className={styles.support}>Забыли пароль?</span>

        <div className={styles.sign_footer}>
        <button data-testid="submit" type="submit">
            Войти
          </button>


          <Link to={`/signUp`}>
            <span className={styles.support_2}>
              Нет аккаунта? Зарегистрироваться
            </span>          
          </Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;