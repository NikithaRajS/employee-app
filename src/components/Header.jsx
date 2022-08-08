import Logo from "../assets/kv logo.png"
const Header = () => {
  return (
    <header >
        <div class="header-logo">
        <img src={Logo} height={45} width={190}/>
        </div>
    </header>
  );
};

export default Header;