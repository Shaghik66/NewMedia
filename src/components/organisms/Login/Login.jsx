import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { PiLockKeyBold } from "react-icons/pi";
import { schema } from "../../../shared/constants/schema";
import { loginThunkCreator } from "../../../store/reducers/authReducer";

import style from "./Login.module.css";

export const Login = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.login);

  useEffect(() => {
    if (userId) {
      localStorage.setItem("userId", userId);
    }
  }, [userId]);

  const user = localStorage.getItem("userId");

  if (userId) {
    return <Navigate to={`/users/${userId}`} />;
  }

  if (user && !userId) {
    return <Navigate to={`/users/${user}`} />;
  }

  return (
    <header className={style.header}>
      <Formik
        validationSchema={schema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(value) => dispatch(loginThunkCreator(value))}
      >
        <Form>
          <div className={style.loginContainer}>
            <div className={style.loginBoxTitle}>
              <PiLockKeyBold className={style.loginIcon} />
              <h1 className={style.loginTitle}>LOGIN</h1>
            </div>
            <div className={style.inputsContainer}>
              <label className={style.loginP}>E-mail Address</label>
              <Field placeholder="Email" name="email" className={style.input} />
              <ErrorMessage name="email">{(msg) => <p>{msg}</p>}</ErrorMessage>

              <label className={style.loginP}>Password</label>
              <Field
                placeholder="Password"
                name="password"
                className={style.input}
              />
              <ErrorMessage name="password">
                {(msg) => <p>{msg}</p>}
              </ErrorMessage>
            </div>
            <button type="submit" className={style.loginButton}>
              SIGN IN
            </button>
          </div>
        </Form>
      </Formik>
    </header>
  );
};
