import "./styles.css";
import Icon from "../../assets/List.png";
import { useNavigate } from "react-router-dom";
import { removeStorage } from "../../services/Utils";

const SideBar = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    removeStorage("idToken");
    navigate(`/`);
  };

  const goToList = () => {
    navigate(`/list`);
  };
  return (
    <aside className="aside">
      <div className="tile">
        <div className="imagebg">
          <img src={Icon} />
        </div>
        <a href=" " class="tile-text" onClick={() => goToList()}>
          Employee List
        </a>
      </div>
      <div className="logout">
        <button className="button button1" onClick={() => goToLogin()}>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
