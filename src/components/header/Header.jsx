import Logo from "../../assets/KvLogo.png"
import './styles.css'
const Header = () => {
  return (
    <header >
        <div class="header-logo">
        <img src={Logo} height={45} width={190} alt="logo"/>
        </div>
    </header>
  );
};

export default Header;