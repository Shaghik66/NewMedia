import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { PiLockKeyBold } from "react-icons/pi";
import { schema } from "../../../shared/constants/schema";
import { loginThunkCreator } from "../../../store/reducers/authReducer";
import style from "./Home.module.css";

export function Home() {
  const dispatch = useDispatch();

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
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <>
            <div className={style.loginContainer}>
              <div className={style.loginBoxTitle}>
                <PiLockKeyBold className={style.loginIcon} />
                <h1 className={style.loginTitle}>LOGIN</h1>
              </div>
              <div className={style.inputsContainer}>
                <p className={style.loginP}>E-mail Address</p>
                <input
                  placeholder="Email"
                  value={values.email}
                  className={style.input}
                  onChange={handleChange}
                  type="email"
                  name="email"
                />
                {errors.email && touched.email && (
                  <p className={ style.err }>
                    {errors.email}
                  </p>
                )}
                <p className={style.loginP}>Password</p>
                <input
                  placeholder="Password"
                  value={values.password}
                  className={style.input}
                  onChange={handleChange}
                  type="password"
                  name="password"
                />
                {errors.password && touched.password && (
                  <p className={ style.err }>{errors.password}</p>
                )}

                
              </div>
              <button type="submit" onClick={handleSubmit} className={style.loginButton}>
                  SIGN IN
                </button>
            </div>
          </>
        )}
      </Formik>
    </header>
  );
}
