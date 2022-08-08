import "../styles/styles.css";
const AddressDetailsBox=({label,line1,line2})=>{
    return(
        <div className="address">
            <div className="label">{label}</div>
            <div className="value">{line1}</div>
            <div className="value">{line2}</div>
        </div>
    )
}

export default AddressDetailsBox;