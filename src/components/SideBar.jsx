import "../styles/styles.css";
import Icon from "../assets/List.png";

const SideBar = () => {
  return (
    <aside class="aside">
      <div class="tile">
        <div class="imagebg">
          <img src={Icon} />
        </div>
        <a href=" " class="tile-text">
          {" "}
          Employee List
        </a>
      </div>
    </aside>
  );
};

export default SideBar;
