import Logo from "../../assets/KvLogo.png";
import "./styles.css";
import { useState, useEffect } from "react";
import { useLoginEmployeeMutation } from "../../services/Api";
import { setStorage } from "../../services/Utils.js";
import { useNavigate } from "react-router-dom";

const LoginBox = () => {
  const navigate = useNavigate();
  const [login, result] = useLoginEmployeeMutation();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const onChange = (value, key) => {
    setCredentials({
      ...credentials,
      [key]: value,
    });
  };

  const onClickSubmit = () => {
    const payload = {
      username: credentials.username,
      password: credentials.password,
    };
    login(payload);
  };

  useEffect(() => {
    if (result.isSuccess) {
      setStorage("idToken", result?.data?.data?.idToken);
      navigate(`/list`);
    }
  }, [result]);

  return (
    <div className="loginbox">
      <img src={Logo} height={45} width={208} alt="logo" />
      <input
        placeholder="Username"
        className="logininput logininput1"
        onChange={(event) => onChange(event.target.value, "username")}
      />
      <input
        placeholder="Password"
        className="logininput logininput2"
        onChange={(event) => onChange(event.target.value, "password")}
      />
      <div>
        <button class="loginbutton" onClick={() => onClickSubmit()}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginBox;
