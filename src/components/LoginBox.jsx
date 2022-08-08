import Logo from "../assets/kv logo.png"
import InputField from "./InputField";
import '../styles/styles.css'
import LoginButton from "./LoginButton";


const LoginBox=()=>{
    return(
        <div className="loginbox">
            <img src={Logo} height={45} width={208} />
            <input placeholder="Username" className="logininput logininput1"/>
            <input placeholder="Password" className="logininput logininput2"/>
            <LoginButton/>
        </div>
    )
}

export default LoginBox;