import React from "react";
import { useState, useEffect, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/authContext";

export const AuthPage = () => {
  const message = useMessage();
  const { loading, request, errors, clearErrors } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const auth = useContext(AuthContext);

  useEffect(() => {
    message(errors);
    clearErrors();
  }, [errors, message, clearErrors]);

  useEffect(() => {
    window.M.updateTextFields();
  }, [])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      message(data.message);
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", {
        ...form
      });
      
      
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Сокращатель ссылок</h1>

        <div className="card">
          <div className="card-content">
            <span className="card-title">Авторизация</span>
            <div className="divider"></div>

            <div className="section">
              <div className="input-field">
                <input
                  placeholder="Введите Email"
                  id="email"
                  type="text"
                  name="email"
                  onChange={changeHandler}
                  value={form.email}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Введите пароль"
                  id="password"
                  type="password"
                  name="password"
                  onChange={changeHandler}
                  value={form.password}
                />
                <label htmlFor="password">Пароль</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn yellow darken-4 btn-margin-right"
              disabled={loading}
              onClick={loginHandler}
            >
              Войти
            </button>
            <button
              className="btn grey lighten-1 black-text"
              disabled={loading}
              onClick={registerHandler}
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
