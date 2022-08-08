import "../styles/styles.css";
import Icon from "../assets/List.png";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate=useNavigate();

  const goToList=()=>{
    navigate(`/list`)
  }
  return (
    <aside class="aside">
      <div class="tile">
        <div class="imagebg">
          <img src={Icon} />
        </div>
        <a href=" " class="tile-text" onClick={()=>goToList()}>
          
          Employee List
        </a>
      </div>
    </aside>
  );
};

export default SideBar;
