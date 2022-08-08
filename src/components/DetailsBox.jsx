
import "../styles/styles.css";
const DetailsBox=({label,value})=>{
    return(
        <div>
            <div className="label">{label}</div>
            <div className="value">{value}</div>
        </div>
    )
}

export default DetailsBox;